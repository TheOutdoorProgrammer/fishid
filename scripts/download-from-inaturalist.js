#!/usr/bin/env node
/**
 * Download fish images from iNaturalist
 * 
 * iNaturalist provides CC-licensed photos with a good API.
 * This script:
 * 1. Reads each fish's scientific name
 * 2. Searches iNaturalist for the taxon
 * 3. Downloads up to N photos per fish
 * 4. Saves them to public/img/fish/<id>/
 * 5. Updates the fish's index.ts with new image paths
 */

const fs = require('fs');
const path = require('path');

const FISH_DIR = path.join(__dirname, '..', 'src', 'fish');
const IMG_DIR = path.join(__dirname, '..', 'public', 'img', 'fish');
const TARGET_IMAGES = 2;
const DELAY_MS = 1200; // Be nice to iNaturalist API

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'FishID-App/1.0 (educational fish identification app)' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function downloadImage(url, outPath) {
  try {
    // Convert medium to large/original for better quality
    let largeUrl = url
      .replace('/medium.', '/large.')
      .replace('/square.', '/large.')
      .replace('medium.jpg', 'large.jpg')
      .replace('medium.jpeg', 'large.jpeg');
    
    const res = await fetch(largeUrl, {
      headers: { 'User-Agent': 'FishID-App/1.0' }
    });
    
    if (!res.ok) {
      // Try original URL if large fails
      const res2 = await fetch(url, { headers: { 'User-Agent': 'FishID-App/1.0' } });
      if (!res2.ok) return false;
      const buf = Buffer.from(await res2.arrayBuffer());
      fs.writeFileSync(outPath, buf);
      return true;
    }
    
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(outPath, buf);
    return true;
  } catch (e) {
    console.error(`  Failed to download: ${e.message}`);
    return false;
  }
}

function getFishInfo(fishId) {
  const indexPath = path.join(FISH_DIR, fishId, 'index.ts');
  if (!fs.existsSync(indexPath)) return null;
  
  const content = fs.readFileSync(indexPath, 'utf-8');
  
  // Extract scientific name
  const sciMatch = content.match(/scientific:\s*['"]([^'"]+)['"]/);
  if (!sciMatch) return null;
  
  // Extract current images
  const imgMatch = content.match(/image:\s*\[([\s\S]*?)\]/);
  const currentImages = [];
  if (imgMatch) {
    const matches = imgMatch[1].matchAll(/['"]([^'"]+)['"]/g);
    for (const m of matches) {
      currentImages.push(m[1]);
    }
  }
  
  return {
    id: fishId,
    scientific: sciMatch[1],
    currentImages
  };
}

async function searchINaturalist(scientificName) {
  const urls = [];
  
  try {
    // Search for the taxon
    const searchUrl = `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(scientificName)}&rank=species&per_page=5`;
    const searchResult = await fetchJson(searchUrl);
    
    if (!searchResult.results?.length) {
      console.log(`    No iNaturalist results for "${scientificName}"`);
      return urls;
    }
    
    // Find exact match or best match
    let taxon = searchResult.results.find(t => 
      t.name.toLowerCase() === scientificName.toLowerCase()
    ) || searchResult.results[0];
    
    // Get detailed taxon info with photos
    await sleep(400);
    const taxonUrl = `https://api.inaturalist.org/v1/taxa/${taxon.id}`;
    const taxonResult = await fetchJson(taxonUrl);
    
    if (taxonResult.results?.[0]) {
      taxon = taxonResult.results[0];
    }
    
    // Collect photo URLs
    if (taxon.taxon_photos) {
      for (const tp of taxon.taxon_photos) {
        const url = tp.photo?.large_url || tp.photo?.medium_url || tp.photo?.original_url;
        if (url) {
          urls.push(url);
        }
        if (urls.length >= TARGET_IMAGES + 3) break; // Get extras in case some fail
      }
    }
    
    // Also check default photo
    if (taxon.default_photo?.medium_url && urls.length < TARGET_IMAGES + 3) {
      const url = taxon.default_photo.medium_url;
      if (!urls.includes(url)) {
        urls.push(url);
      }
    }
    
  } catch (e) {
    console.error(`    iNaturalist search failed: ${e.message}`);
  }
  
  return urls;
}

function updateFishFile(fishId, imagePaths) {
  const indexPath = path.join(FISH_DIR, fishId, 'index.ts');
  if (!fs.existsSync(indexPath)) return false;
  
  let content = fs.readFileSync(indexPath, 'utf-8');
  
  // Format the image array
  const imageArrayStr = imagePaths.length === 0 
    ? '[]'
    : `[\n    ${imagePaths.map(p => `'${p}'`).join(',\n    ')}\n  ]`;
  
  // Replace the image array
  content = content.replace(
    /image:\s*\[[\s\S]*?\]/,
    `image: ${imageArrayStr}`
  );
  
  fs.writeFileSync(indexPath, content);
  return true;
}

async function processFish(fishId) {
  const info = getFishInfo(fishId);
  if (!info) {
    console.log(`  Could not read fish info`);
    return { downloaded: 0, total: 0 };
  }
  
  const needed = TARGET_IMAGES - info.currentImages.length;
  if (needed <= 0) {
    console.log(`  Already has ${info.currentImages.length} images ✓`);
    return { downloaded: 0, total: 0 };
  }
  
  console.log(`  ${info.scientific} - needs ${needed} more`);
  
  // Search iNaturalist
  const photoUrls = await searchINaturalist(info.scientific);
  
  if (photoUrls.length === 0) {
    console.log(`    No photos found on iNaturalist`);
    return { downloaded: 0, total: needed };
  }
  
  console.log(`    Found ${photoUrls.length} candidate photos`);
  
  // Ensure directory exists
  const fishImgDir = path.join(IMG_DIR, fishId);
  fs.mkdirSync(fishImgDir, { recursive: true });
  
  // Find next available index
  const existingFiles = fs.existsSync(fishImgDir) ? fs.readdirSync(fishImgDir) : [];
  let nextIndex = existingFiles.length + 1;
  
  // Download images
  const newPaths = [...info.currentImages];
  let downloaded = 0;
  
  for (const url of photoUrls) {
    if (newPaths.length >= TARGET_IMAGES) break;
    
    const ext = url.includes('.png') ? 'png' : 'jpg';
    const filename = `${nextIndex}.${ext}`;
    const outPath = path.join(fishImgDir, filename);
    const webPath = `/img/fish/${fishId}/${filename}`;
    
    process.stdout.write(`    Downloading ${filename}... `);
    await sleep(600); // Rate limiting
    
    if (await downloadImage(url, outPath)) {
      newPaths.push(webPath);
      downloaded++;
      nextIndex++;
      console.log(`✓`);
    } else {
      console.log(`✗`);
    }
  }
  
  // Update the TypeScript file
  if (downloaded > 0) {
    updateFishFile(fishId, newPaths);
    console.log(`    Updated index.ts with ${newPaths.length} total images`);
  }
  
  return { downloaded, total: needed };
}

async function main() {
  console.log('🐟 FishID Image Downloader (iNaturalist)\n');
  
  // Get all fish directories
  const fishDirs = fs.readdirSync(FISH_DIR).filter(f => {
    const p = path.join(FISH_DIR, f);
    return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.ts'));
  });
  
  console.log(`Found ${fishDirs.length} fish species\n`);
  
  let totalDownloaded = 0;
  let totalNeeded = 0;
  let processed = 0;
  
  for (const fishId of fishDirs) {
    processed++;
    console.log(`[${processed}/${fishDirs.length}] ${fishId}`);
    
    const result = await processFish(fishId);
    totalDownloaded += result.downloaded;
    totalNeeded += result.total;
    
    // Rate limiting between fish
    await sleep(DELAY_MS);
  }
  
  console.log(`\n✅ Done!`);
  console.log(`   Downloaded: ${totalDownloaded} images`);
  console.log(`   Still needed: ${totalNeeded - totalDownloaded} images`);
}

main().catch(console.error);
