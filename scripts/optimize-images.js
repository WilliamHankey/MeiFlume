import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY = 80;
const SIZES = [400, 800, 1200, 1600];

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath);
  const nameWithoutExt = path.parse(filename).name;
  
  try {
    // Create WebP version
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(path.join(outputDir, `${nameWithoutExt}.webp`));
    
    // Create different sizes
    for (const size of SIZES) {
      await sharp(inputPath)
        .resize(size, null, { fit: 'inside' })
        .jpeg({ quality: QUALITY })
        .toFile(path.join(outputDir, `${nameWithoutExt}-${size}.jpg`));
    }
    console.log(`Optimized: ${filename}`);
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error);
  }
}

async function processDirectory(dir) {
  const files = await fs.promises.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await fs.promises.stat(filePath);
    
    if (stats.isDirectory()) {
      await processDirectory(filePath);
    } else if (stats.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
      const outputDir = path.join(dir, 'optimized');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      await optimizeImage(filePath, outputDir);
    }
  }
}

async function main() {
  try {
    console.log('Starting image optimization...');
    await processDirectory(PUBLIC_DIR);
    console.log('Image optimization completed!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

main(); 