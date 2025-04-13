import React from 'react'
import Categories from './components/categories'
import ProductCard from './components/productCard'
import { Product } from '../types'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: 'Explore Ejae Products',
  description: 'Explore our pre-designed products and find the perfect one for you.',
  openGraph: {
    title: 'Explore Products',
    description: 'Explore our pre-designed products and find the perfect one for you.',
    url: '/products',
    siteName: 'ejae.vercel.app',
    images: [
      {
        url: '/images/char-walk.png',
        width: 630,
        height: 630,
        alt: 'Explore our Designs'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Designs',
    description: 'Explore our pre-designed products and find the perfect one for you.',
    images: ['/images/og-image.png']
  }
}

export default async function Products() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_ORIGIN + '/api/products', {
      next: {
        revalidate: 60 // 60 seconds
      }
    })
    
    await new Promise(resolve => setTimeout(resolve, 10000));

    const json = await res.json()
    const products = json.data as Product[]
    
    const categoryMap = products.reduce((map, product) => {
      if (!map.has(product.category)) {
        map.set(product.category, [])
      }
      
      map.get(product.category)?.push(product)

      return map
    }, new Map<string, Product[]>())

    return (
      <main className='px-4 py-8 grow bg-white'>
        <h1 className='mb-8 text-5xl text-center font-bangers'>
          Explore
        </h1>

        <Categories />

        
        <ul className='mt-8 md:
        px-8 flex flex-col gap-8'>
          {Array.from(categoryMap.entries()).map(([category, products]) => (
            <li key={category}>
              <h2 className='font-lucky text-2xl'>
                {category}
              </h2>

              <ul className='mt-2 pr-8 flex gap-4 overflow-x-auto'>
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    )
  } catch (error) {
    console.error('Error fetching products:', error)

    return (
      <main className='px-4 py-8 grow bg-white'>
        <h1 className='mb-8 text-5xl text-center font-bangers'>
          Explore
        </h1>

        <Categories />

        <p className='mt-12 p-4 text-center'>Failed to load products. Try again later.</p>
      </main>
    )
  }
}
