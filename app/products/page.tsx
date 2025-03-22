'use client'

import React from 'react'
import Categories from './components/categories'
import { categories, products } from './data'
import ProductCard from './components/productCard'

export default function Products() {
  return (
    <main className='py-8 grow bg-white'>
      <h1 className='mb-8 text-5xl text-center font-bangers'>
        Explore
      </h1>

      <Categories />

      <ul className='mt-8 flex flex-col gap-8'>
        {categories.map((category) => (
          <ul key={category.name}>
            <li>
              <h2 className='ml-8 font-lucky text-2xl'>
                {category.name}
              </h2>

              <ul className='mt-2 px-8 flex gap-4  overflow-x-auto'>
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </ul>
    </main>
  )
}
