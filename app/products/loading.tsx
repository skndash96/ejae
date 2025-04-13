import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function LoadingProduct() {
  return (
    <div className='grow p-8 flex flex-col gap-8'>
      <Skeleton className='w-full h-4 mt-4 rounded-xl' />
      <div className='flex flex-row flex-wrap gap-4'>
        <Skeleton className='w-24 h-24 md:w-32 md:h-32 rounded-xl' />
        <Skeleton className='w-24 h-24 md:w-32 md:h-32 rounded-xl' />
        <Skeleton className='w-24 h-24 md:w-32 md:h-32 rounded-xl' />
      </div>

      <Skeleton className='w-full h-4 mt-4 rounded-xl' />
      <div className='flex flex-row flex-wrap gap-4'>
        <Skeleton className='w-24 h-24 md:w-32 md:h-32 rounded-xl' />
        <Skeleton className='w-24 h-24 md:w-32 md:h-32 rounded-xl' />
        <Skeleton className='w-24 h-24 md:w-32 md:h-32 rounded-xl' />
      </div>
    </div>
  )
}
