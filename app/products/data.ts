export const categories = [
  {
    imageUrl: "/images/apparel/hoodies.png",
    name: "Hoodies",
    startingPrice: 700
  },
  {
    imageUrl: "/images/apparel/sweatshirt.png",
    name: "Sweatshirt",
    startingPrice: 800
  },
  {
    imageUrl: "/images/apparel/tees.png",
    name: "T-Shirts",
    startingPrice: 500
  },
  {
    imageUrl: "/images/apparel/denims.png",
    name: "Denims",
    startingPrice: 1200
  },
  {
    imageUrl: "/images/apparel/swapdenims.png",
    name: "Swap Denims",
    startingPrice: 1500
  },
  {
    imageUrl: "/images/apparel/shoes.png",
    name: "Shoes",
    startingPrice: 2000
  },
  {
    imageUrl: "/images/apparel/embroidery.png",
    name: "Embroidery",
    startingPrice: 900
  },
  {
    imageUrl: "/images/logo.png",
    name: 'Others',
    startingPrice: 1000
  }
]

export const products = [
  {
    id: '1',
    name: 'Hoodie Classic',
    price: 750,
    description: 'A classic hoodie made from premium cotton for ultimate comfort.',
    category: 'Hoodies',
    images: ['/images/apparel/hoodies.png', '/images/apparel/hoodies.png'],
    colors: ['Black', 'Gray', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    company: 'UrbanStyle Co.',
    shipping: true,
    featured: true,
    rating: 4.5,
    stock: 25
  },
  {
    id: '2',
    name: 'Cozy Sweatshirt',
    price: 850,
    description: 'Stay warm and stylish with this cozy sweatshirt.',
    category: 'Sweatshirt',
    images: ['/images/apparel/sweatshirt.png', '/images/apparel/sweatshirt.png'],
    colors: ['Blue', 'Green', 'Red'],
    sizes: ['S', 'M', 'L'],
    company: 'CozyWear',
    shipping: true,
    featured: false,
    rating: 4.2,
    stock: 15
  },
  {
    id: '3',
    name: 'Graphic Tee',
    price: 550,
    description: 'A comfortable graphic tee with unique artwork.',
    category: 'T-Shirts',
    images: ['/images/apparel/tees.png', '/images/apparel/tees.png'],
    colors: ['White', 'Black'],
    sizes: ['M', 'L', 'XL'],
    company: 'ArtWear',
    shipping: false,
    featured: true,
    rating: 4.8,
    stock: 40
  },
  {
    id: '4',
    name: 'Denim Jacket',
    price: 1250,
    description: 'A stylish denim jacket perfect for any occasion.',
    category: 'Denims',
    images: ['/images/apparel/denims.png', '/images/apparel/denims.png'],
    colors: ['Blue', 'Black'],
    sizes: ['M', 'L'],
    company: 'DenimPro',
    shipping: true,
    featured: true,
    rating: 4.6,
    stock: 30
  },
  {
    id: '5',
    name: 'Swap Fit Denim',
    price: 1550,
    description: 'Custom-fit denims tailored for every body type.',
    category: 'Swap Denims',
    images: ['/images/apparel/swapdenims.png', '/images/apparel/swapdenims.png'],
    colors: ['Blue', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    company: 'FitSwap',
    shipping: true,
    featured: false,
    rating: 4.7,
    stock: 20
  },
  {
    id: '6',
    name: 'Embroidered Hoodie',
    price: 900,
    description: 'Stylish embroidered hoodie with intricate patterns.',
    category: 'Embroidery',
    images: ['/images/apparel/embroidery.png'],
    colors: ['Black', 'White'],
    sizes: ['S', 'M', 'L'],
    company: 'ThreadStyle',
    shipping: true,
    featured: true,
    rating: 4.9,
    stock: 10
  },
  {
    id: '7',
    name: 'Classic Sneakers',
    price: 2200,
    description: 'Comfortable and stylish sneakers for everyday wear.',
    category: 'Shoes',
    images: ['/images/apparel/shoes.png'],
    colors: ['White', 'Black'],
    sizes: ['7', '8', '9', '10'],
    company: 'StepUp',
    shipping: true,
    featured: true,
    rating: 4.3,
    stock: 50
  }
]
