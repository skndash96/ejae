'use client'
import { Product } from '@/app/types'
import { Button } from '@/components/ui/button'
import { useFavourites } from '@/context/favContext'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({
  product
}: {
  product: Product
}) {
  const { favourites } = useFavourites()

  return (
    <li className='relative block rounded-xl w-fit'>
      {favourites.some((item) => item.id === product.id) && (
        <div className='absolute z-[1] top-0 right-0 p-1'>
          <Heart size={20} className='fill-red-500' />
        </div>
      )}

      <div className='w-52 h-44 relative rounded-t-xl bg-[#d9d9d9]'>
        <Image className='w-full h-auto object-contain' fill src={product.images[0].url} alt={product.name} />
      </div>
      <div className='p-2'>
        <div>
          <h3 className='font-bold'>
            {product.name}
          </h3>
          <p className='text-lg'>
            ₹{(product.price / 100).toFixed(2)}
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
  )
}
