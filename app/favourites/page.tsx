'use client'
import { useFavourites } from '@/context/favContext'
import React from 'react'
import ProductCard from '../products/components/productCard'
import { HeartCrack } from 'lucide-react'
import Link from 'next/link'

export default function FavouritesPage() {
  const { favourites } = useFavourites()

  return (
    <div className='p-8 grow flex flex-col gap-4 bg-white'>
      <div className='font-lucky text-2xl'>
        Favourites
      </div>

      <div className='mt-4 flex flex-wrap gap-4'>
        {favourites.length === 0 && (
          <div className='text-center'>
            <HeartCrack size={64} className='mx-auto mb-4' />
            <h2 className='text-2xl'>Find something you love</h2>
            <Link href='/products' className='mt-4 block w-fit mx-auto rounded-xl border p-2 shadow-[3px_3px_black]'>
              Explore Products
            </Link>
          </div>
        )}
        {favourites.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  )
}
