'use client'

import React from 'react'
import Categories from './components/categories'
import { categories, products } from './data'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
                  <li key={product.name} className='block rounded-xl'>
                    <div className='w-52 h-44 relative rounded-t-xl bg-[#d9d9d9]'>
                      <Image className='w-full h-auto object-contain' fill src={product.imageUrl} alt={product.name} />
                    </div>
                    <div className='p-2'>
                      <div>
                        <h3 className='font-bold'>
                          {product.name}
                        </h3>
                        <p className='text-lg'>
                          ₹{product.price}
                        </p>
                      </div>
                      <div>
                        <Button asChild className='mt-2 hover:cursor-pointer'>
                          <Link href={`/products/${product.id}`} className=''>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </li>
                ))
                }
              </ul>
            </li>
          </ul>
        ))}
      </ul>
    </main>
  )
}
