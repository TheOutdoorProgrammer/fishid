import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

// Import all fish data
import * as fishExports from '../src/fish/index';

interface Fish {
  id: string;
  image: string;
  quizImage: string;
}

const PUBLIC_IMG_DIR = path.join(process.cwd(), 'public', 'img', 'fish');
const RATE_LIMIT_MS = 750; // 750ms between requests to be respectful to Wikimedia
const FAILED_DOWNLOADS: { fishId: string; url: string; error: string }[] = [];

// Extract all fish objects from exports
function getAllFish(): Fish[] {
  const fish: Fish[] = [];

  for (const [key, value] of Object.entries(fishExports)) {
    if (
      value &&
      typeof value === 'object' &&
      'id' in value &&
      'image' in value &&
      'quizImage' in value
    ) {
      fish.push(value as Fish);
    }
  }

  return fish;
}

// Create directory if it doesn't exist
function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Download a single file
function downloadFile(url: string, filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const file = fs.createWriteStream(filePath);

    protocol
      .get(url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            file.destroy();
            downloadFile(redirectUrl, filePath).then(resolve).catch(reject);
            return;
          }
        }

        if (response.statusCode !== 200) {
          file.destroy();
          fs.unlinkSync(filePath);
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

// Sleep for rate limiting
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Get file extension from URL
function getFileExtension(url: string): string {
  const urlPath = url.split('?')[0]; // Remove query params
  const ext = path.extname(urlPath).toLowerCase();

  // Handle common image extensions
  if (ext === '.jpg' || ext === '.jpeg') return '.jpg';
  if (ext === '.png') return '.png';
  if (ext === '.gif') return '.gif';
  if (ext === '.webp') return '.webp';

  // Default to jpg for Wikimedia URLs
  return '.jpg';
}

async function downloadFishImages(): Promise<void> {
  const fish = getAllFish();

  console.log(`Found ${fish.length} fish species to process`);
  console.log(`Output directory: ${PUBLIC_IMG_DIR}`);
  console.log('');

  // Create base directory
  ensureDir(PUBLIC_IMG_DIR);

  let processed = 0;

  for (const f of fish) {
    const fishDir = path.join(PUBLIC_IMG_DIR, f.id);
    ensureDir(fishDir);

    const urls = [f.image];

    // Only add quizImage if it's different from image
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

      // Rate limiting between requests
      if (i < urls.length - 1 || processed < fish.length - 1) {
        await sleep(RATE_LIMIT_MS);
      }
    }

    processed++;

    // Progress indicator every 10 fish
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
    console.log('Failed downloads:');
    FAILED_DOWNLOADS.forEach((item) => {
      console.log(`  - ${item.fishId}: ${item.url}`);
      console.log(`    Error: ${item.error}`);
    });
  }
}

// Run the download
downloadFishImages().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
