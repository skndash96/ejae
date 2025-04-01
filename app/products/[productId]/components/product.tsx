'use client'
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cartContext';
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Star, StarHalf, Check, Trash2, ChevronLeft, Heart } from 'lucide-react';
import { Product } from '@/app/types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useRouter } from 'next/navigation';
import { useFavourites } from '@/context/favContext';
import Reviews from './reviews';

export default function ProductComponent({ product }: { product: Product }) {
  const router = useRouter()
  const cart = useCart()
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites()
  const inCart = cart.state.items.filter(item => item.id === product.id)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => {
      if (product.rating >= i + 1) {
        return <Star key={i} size={16} className='text-yellow-500 fill-yellow-500' />;
      } else if (product.rating > i && product.rating < i + 1) {
        return <StarHalf key={i} size={16} className='text-yellow-500 fill-yellow-500' />;
      } else {
        return <Star key={i} size={16} className='text-gray-300' />;
      }
    });
  }

  return (
    <div className='max-w-6xl mx-auto md:my-8 p-6 bg-white shadow-lg rounded-2xl'>
      <div className='flex flex-col justify-center gap-8'>
        <Button variant='outline' onClick={() => router.back()} className='w-fit cursor-pointer'>
          <ChevronLeft size={16} />
        </Button>

        <Carousel className='p-2 w-full max-w-80 h-fit mx-auto shadow-lg bg-gray-200 rounded-lg' showArrows={true} infiniteLoop>
          {product.images.map((img, index) => (
            <div key={index}>
              <img src={img.url} alt={product.name} className='rounded-xl' />
            </div>
          ))}
        </Carousel>

        <div className='flex-1'>
          <h1 className='text-3xl font-bold'>{product.name}</h1>
          <p className='text-sm text-gray-500'>by {product.company}</p>
          <div className='flex items-center gap-2 mt-2'>
            {renderStars()} <span className='text-gray-500'>{product.rating} ({product.numberOfReviews?.toString() || 0} reviews)</span>
          </div>

          {favourites.some(fav => fav.id === product.id) ? (
            <Button variant='outline' className='mt-2 zoom-in animate-in' onClick={() => removeFromFavourites(product)}>
              <Heart size={16} className='fill-red-500' /> Favourite
            </Button>
          ) : (
            <Button variant='outline' className='mt-2' onClick={() => addToFavourites(product)}>
              <Heart size={16} className='text-red-500 animate-in zoom-out' /> Add to Favourites
            </Button>
          )}

          <p className='text-gray-700 mt-4'>{product.description}</p>

          <p className='text-2xl font-bold mt-4'>₹{(product.price / 100).toFixed(2)}</p>
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

          {!inCart.some(item => item.color === selectedColor && item.size === selectedSize) && (
            <div className='mt-4 grid grid-cols-2 gap-2 w-fit'>
              <Button onClick={() => cart.dispatch({ type: 'ADD_ITEM', payload: { ...product, product: product.id, quantity: 1, color: selectedColor, size: selectedSize } })} disabled={product.stock === 0} className='px-4 bg-yellow-300 hover:bg-amber-300  drop-shadow-[3px_3px_black] hover:drop-shadow-[5px_5px_black] text-black font-semibold'>
                Buy Now
              </Button>
              <Button onClick={() => cart.dispatch({ type: 'ADD_ITEM', payload: { ...product, product: product.id, quantity: 1, color: selectedColor, size: selectedSize } })} disabled={product.stock === 0} className='px-4 bg-black hover:bg-black drop-shadow-[3px_3px_black] hover:drop-shadow-[5px_5px_black] text-white font-semibold'>
                Add to Cart
              </Button>
            </div>
          )}

          {inCart.length > 0 && (
            <div className='mt-12'>
              <h3 className='font-bangers font-bold text-xl mb-2'>In Cart</h3>
              {inCart.map((item, index) => (
                <div key={index} className='flex items-center gap-4 mb-4 p-4 border rounded-lg shadow-sm'>
                  <span className='font-medium'>Variant: <span style={{ backgroundColor: item.color }} className='inline-block w-4 h-4 border border-neutral-400 -mb-[2px] rounded-full'></span> / {item.size}</span>
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

      <Reviews product={product} />
    </div>
  )
}
