'use client'
import Categories from '@/app/products/components/categories'
import ProductCard from '@/app/products/components/productCard'
import { Product } from '@/app/types'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Category({
  id,
  products
}: {
  id: string,
  products: Product[]
}) {
  const router = useRouter()

  return (
    <div className="w-fit mx-auto">
      <h1 className="mt-8 text-2xl font-bangers">
        <Button onClick={() => router.back()} variant='outline' className='mr-4 cursor-pointer' size='sm'>
          <ChevronLeft size={16} />
        </Button>

        {id} Category
      </h1>

      <ul className="mt-8 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

        {products.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 14l-4-4m0 0l4-4m-4 4h16m-7 4v1m0 4h.01m-6.01-4v1m0 4h.01m6.01-4a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm">Try adjusting your filters or check back later.</p>
          </div>
        )}
      </ul>

      <Categories />
    </div>
  )
}
