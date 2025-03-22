'use client'
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cartContext';
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Star, StarHalf, Check, Trash2, ChevronLeft } from 'lucide-react';
import { Product } from '@/app/types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useRouter } from 'next/navigation';

export default function ProductComponent({ product }: { product: Product }) {
  const router = useRouter()
  const cart = useCart()
  const inCart = cart.state.items.filter(item => item.id === product.id)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      (product.rating < i + 1) ?
        <StarHalf key={i} size={16} className='text-yellow-500 fill-yellow-500' /> :
        <Star key={i} size={16} className={i < product.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} />
    ))
  }

  return (
    <div className='max-w-4xl mx-auto flex flex-col md:flex-row md:my-8 justify-center gap-8 p-6 bg-white shadow-lg rounded-2xl'>
      <Button variant='outline' onClick={() => router.back()} className='mb-4 cursor-pointer'>
        <ChevronLeft size={16} className='mr-2' />
        Back
      </Button>

      <Carousel className='w-72' showArrows={true} infiniteLoop>
        {product.images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={product.name} className='rounded-xl' />
          </div>
        ))}
      </Carousel>

      <div className='py-8 flex-1'>
        <h1 className='text-3xl font-bold'>{product.name}</h1>
        <p className='text-sm text-gray-500'>by {product.company}</p>
        <div className='flex items-center gap-2 mt-2'>
          {renderStars()} <span className='text-gray-500'>({product.rating}/5)</span>
        </div>
        <p className='text-gray-700 mt-4'>{product.description}</p>

        <p className='text-2xl font-bold mt-4'>₹{product.price}</p>
        <p className={`mt-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>{product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}</p>

        {product.shipping && <p className='text-blue-500 mt-2'>Free Shipping Available</p>}

        <div className='mt-4'>
          <p className='font-semibold'>Available Colors:</p>
          <div className='flex gap-2'>
            {product.colors.map((color, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'border-black' : 'border-gray-400'} flex items-center justify-center`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && <Check size={16} className={color.toLowerCase() === 'white' ? 'txt-black' : 'text-white'} />}
              </button>
            ))}
          </div>
        </div>

        <div className='mt-4'>
          <p className='font-semibold'>Available Sizes:</p>
          <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className='flex gap-2'>
            {product.sizes.map((size, index) => (
              <div key={index} className='flex items-center gap-1'>
                <RadioGroupItem value={size} className='border border-gray-400 rounded-lg p-2' />
                <span>{size}</span>
              </div>
            ))}
          </RadioGroup>
        </div>

        {!cart.state.items.some(item => item.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize) && (
          <Button className='mt-4' onClick={() => cart.dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1, selectedColor, selectedSize } })} disabled={product.stock === 0}>Add to cart</Button>
        )}

        {inCart.length > 0 && (
          <div className='mt-12'>
            <h3 className='font-lucky font-bold text-xl mb-2'>In Cart</h3>
            {inCart.map((item, index) => (
              <div key={index} className='flex items-center gap-4 mb-4 p-4 border rounded-lg shadow-sm'>
                <span className='font-medium'>Variant: <span style={{ backgroundColor: item.selectedColor }} className='inline-block w-4 h-4 border border-neutral-400 -mb-[2px] rounded-full'></span> / {item.selectedSize}</span>
                <div className='bg-neutral-100 border border-neutral-300 flex items-center rounded-xl gap-2'>
                  <Button variant='ghost' className='hover:bg-neutral-200' onClick={() => cart.dispatch({ type: item.quantity === 1 ? 'REMOVE_ITEM' : 'ADD_ITEM', payload: { ...item, quantity: item.quantity - 1 } })}>-</Button>
                  <span>{item.quantity}</span>
                  <Button variant='ghost' className='hover:bg-neutral-200' onClick={() => cart.dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity: item.quantity + 1 } })} disabled={item.quantity >= product.stock}>+</Button>
                </div>
                <Button onClick={() => cart.dispatch({ type: 'REMOVE_ITEM', payload: item })} variant='destructive'>
                  <Trash2 size={16} />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
