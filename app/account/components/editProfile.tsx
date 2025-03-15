'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React, { FormEvent, ReactNode } from 'react'

export default function EditProfile({
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
          Edit Profile
        </DialogTitle>
        <InnerComponent />
      </DialogContent>
    </Dialog>
  )
}

const InnerComponent = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget)
    console.log(Object.fromEntries(formData))
    e.preventDefault()
  }
  
  return (
    <form onSubmit={handleSubmit} className='p-4 pt-0 flex flex-col gap-2 bg-white'>
      <div>
        <label htmlFor='name' className='text-sm font-bold'>Name</label>
        <Input name='name' type='text' placeholder='Your name' />
      </div>
      <div>
        <label htmlFor='phone' className='text-sm font-bold'>Phone Number</label>
        <Input name='phone' type='text' placeholder='+91 98xxx 12xxx' />
      </div>
      <div>
        <label htmlFor='birthday' className='text-sm font-bold'>Birthday</label>
        <Input name='birthday' type='date' placeholder='Birthday' />
      </div>
      <div className='self-end flex gap-2 justify-end'>
        <DialogClose asChild>
          <Button type="button" variant='ghost' className='mt-4'>
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" className='mt-4'>
          Save
        </Button>
      </div>
    </form>
  )
}