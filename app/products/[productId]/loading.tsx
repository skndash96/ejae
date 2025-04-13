import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function LoadingProduct() {
  return (
    <div className='grow p-8 flex flex-col md:flex-row gap-8'>
      <Skeleton className='w-full h-96 max-w-md rounded-xl' />
      <div className='flex flex-col w-full'>
        <Skeleton className='w-full h-8 mt-4 rounded-xl' />
        <Skeleton className='w-full h-8 mt-2 rounded-xl' />
      </div>
    </div>
  )
}
