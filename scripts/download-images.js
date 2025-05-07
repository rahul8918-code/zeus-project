const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  hero: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80',
  categories: {
    women: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    men: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    accessories: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'
  },
  products: {
    // Dresses
    dress1: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80',
    dress2: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80',
    dress3: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&q=80',
    dress4: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&q=80',
    dress5: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&q=80',

    // Men's Shirts
    shirt1: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80',
    shirt2: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80',
    shirt3: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80',
    shirt4: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80',
    shirt5: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80',

    // Men's Pants
    jeans1: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    jeans2: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    jeans3: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    jeans4: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    jeans5: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',

    // Accessories
    bag1: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80',
    earrings1: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80',
    hat1: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80',
    belt1: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    sunglasses1: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&q=80',

    // Women's Tops
    top1: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80',
    top2: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80',
    top3: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80',
    top4: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80',
    top5: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80',

    // Women's Bottoms
    bottom1: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    bottom2: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    bottom3: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    bottom4: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
    bottom5: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',

    // Placeholder
    placeholder: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80'
  }
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  try {
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

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages(); 