'use client'
import Categories from '@/app/products/components/categories'
import ProductCard from '@/app/products/components/productCard'
import { products } from '@/app/products/data'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Category({
  id
}: {
  id: string
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
      </ul>

      <Categories />
    </div>
  )
}
