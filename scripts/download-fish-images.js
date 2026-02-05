const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const PUBLIC_IMG_DIR = path.join(process.cwd(), 'public', 'img', 'fish');
const RATE_LIMIT_MS = 2000;
const FAILED_DOWNLOADS = [];

function getAllFish() {
  const fishDir = path.join(process.cwd(), 'src', 'fish');
  const fishIds = fs.readdirSync(fishDir).filter((f) => {
    const stat = fs.statSync(path.join(fishDir, f));
    return stat.isDirectory();
  });

  const fish = [];

  for (const fishId of fishIds) {
    try {
      const indexPath = path.join(fishDir, fishId, 'index.ts');
      const content = fs.readFileSync(indexPath, 'utf-8');

      const imageMatch = content.match(/image:\s*['"]([^'"]+)['"]/);
      const quizImageMatch = content.match(/quizImage:\s*['"]([^'"]+)['"]/);

      if (imageMatch) {
        fish.push({
          id: fishId,
          image: imageMatch[1],
          quizImage: quizImageMatch ? quizImageMatch[1] : imageMatch[1],
        });
      }
    } catch (error) {
      console.error(`Error reading ${fishId}:`, error.message);
    }
  }

  return fish;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function downloadFile(url, filePath, retries = 3) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const file = fs.createWriteStream(filePath);

    const options = {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        Accept: 'image/*,*/*',
        Referer: 'https://commons.wikimedia.org/',
      },
    };

    protocol
      .get(url, options, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            file.destroy();
            downloadFile(redirectUrl, filePath, retries).then(resolve).catch(reject);
            return;
          }
        }

        if (response.statusCode === 429 && retries > 0) {
          file.destroy();
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
          const backoffMs = (4 - retries) * 5000;
          setTimeout(() => {
            downloadFile(url, filePath, retries - 1)
              .then(resolve)
              .catch(reject);
          }, backoffMs);
          return;
        }

        if (response.statusCode !== 200) {
          file.destroy();
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }

        response.pipe(file);

        file.on('finish', () => {
          file.close();
          resolve();
        });
      })
      .on('error', (err) => {
        file.destroy();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        reject(err);
      });
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFileExtension(url) {
  const urlPath = url.split('?')[0];
  const ext = path.extname(urlPath).toLowerCase();

  if (ext === '.jpg' || ext === '.jpeg') return '.jpg';
  if (ext === '.png') return '.png';
  if (ext === '.gif') return '.gif';
  if (ext === '.webp') return '.webp';

  return '.jpg';
}

async function downloadFishImages() {
  const fish = getAllFish();

  console.log(`Found ${fish.length} fish species to process`);
  console.log(`Output directory: ${PUBLIC_IMG_DIR}`);
  console.log(`Rate limit: ${RATE_LIMIT_MS}ms between requests`);
  console.log('');

  ensureDir(PUBLIC_IMG_DIR);

  let processed = 0;

  for (const f of fish) {
    const fishDir = path.join(PUBLIC_IMG_DIR, f.id);
    ensureDir(fishDir);

    const urls = [f.image];

    if (f.quizImage && f.quizImage !== f.image) {
      urls.push(f.quizImage);
    }

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const fileNum = i + 1;
      const ext = getFileExtension(url);
      const filePath = path.join(fishDir, `${fileNum}${ext}`);

      try {
        await downloadFile(url, filePath);
        console.log(`✓ ${f.id}/${fileNum}${ext}`);
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error(`✗ ${f.id}/${fileNum}${ext} - ${errorMsg}`);
        FAILED_DOWNLOADS.push({
          fishId: f.id,
          url,
          error: errorMsg,
        });
      }

      if (i < urls.length - 1 || processed < fish.length - 1) {
        await sleep(RATE_LIMIT_MS);
      }
    }

    processed++;

    if (processed % 10 === 0) {
      console.log(`Progress: ${processed}/${fish.length}`);
    }
  }

  console.log('');
  console.log('=== Download Summary ===');
  console.log(`Total fish processed: ${fish.length}`);
  console.log(`Failed downloads: ${FAILED_DOWNLOADS.length}`);

  if (FAILED_DOWNLOADS.length > 0) {
    console.log('');
    console.log('Failed downloads (dead links or persistent rate limits):');
    FAILED_DOWNLOADS.forEach((item) => {
      console.log(`  - ${item.fishId}: ${item.url}`);
      console.log(`    Error: ${item.error}`);
    });
  }
}

downloadFishImages().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
