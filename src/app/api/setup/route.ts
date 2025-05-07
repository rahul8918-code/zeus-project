import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import https from 'https';

const images = {
  hero: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80',
  categories: {
    women: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    men: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    accessories: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'
  },
  products: {
    dress1: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80',
    dress2: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80',
    shirt1: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80',
    shirt2: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80'
  }
};

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = require('fs').createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

export async function GET() {
  try {
    // Create directories if they don't exist
    const dirs = [
      'public/images',
      'public/images/categories',
      'public/images/products'
    ];

    for (const dir of dirs) {
      if (!require('fs').existsSync(dir)) {
        require('fs').mkdirSync(dir, { recursive: true });
      }
    }

    // Download hero image
    await downloadImage(images.hero, 'public/images/hero.jpg');

    // Download category images
    for (const [category, url] of Object.entries(images.categories)) {
      await downloadImage(url, `public/images/categories/${category}.jpg`);
    }

    // Download product images
    for (const [product, url] of Object.entries(images.products)) {
      await downloadImage(url, `public/images/products/${product}.jpg`);
    }

    return NextResponse.json({ success: true, message: 'Setup completed successfully' });
  } catch (error) {
    console.error('Error during setup:', error);
    return NextResponse.json(
      { success: false, error: 'Setup failed' },
      { status: 500 }
    );
  }
} 