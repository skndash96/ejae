'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React, { FormEvent, ReactNode } from 'react'

export default function EditAddress({
  trigger
}: {
  trigger: ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className='p-0'>
        <DialogTitle className='p-4 pb-0 font-lucky text-xl'>
          Edit Address
        </DialogTitle>
        <InnerComponent />
      </DialogContent>
    </Dialog>
  )
}

const InnerComponent = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='p-4 pt-0 flex flex-col gap-2 bg-white'>
      <div>
        <label htmlFor='street' className='text-sm font-bold'>Street</label>
        <Input name='street' type='text' placeholder='Street' />
      </div>
      <div>
        <label htmlFor='city' className='text-sm font-bold'>City</label>
        <Input name='city' type='text' placeholder='City' />
      </div>
      <div>
        <label htmlFor='state' className='text-sm font-bold'>State</label>
        <Input name='state' type='text' placeholder='State' />
      </div>
      <div>
        <label htmlFor='zip' className='text-sm font-bold'>Zip</label>
        <Input name='zip' type='text' placeholder='Zip' />
      </div>
      <div>
        <label htmlFor='country' className='text-sm font-bold'>Country</label>
        <Input name='country' type='text' placeholder='Country' />
      </div>
      <div className='self-end flex gap-2 justify-end'>
        <DialogClose asChild>
          <Button type="button" variant='ghost' className='mt-4'>
            Cancel
          </Button>
        </DialogClose>
        <Button type='button' className='mt-4'>
          Save
        </Button>
      </div>
    </form>
  )
}