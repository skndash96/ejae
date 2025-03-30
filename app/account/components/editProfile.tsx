'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useUserContext } from '@/context/userContext'
import React, { FormEvent, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import { UserData } from '@/app/types'

export default function EditProfile({
  trigger,
  defaultOpen = false
}: {
  defaultOpen?: boolean
  trigger?: ReactNode
}) {
  return (
    <Dialog defaultOpen={defaultOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent aria-description={undefined} className='p-0'>
        <DialogTitle className='p-4 pb-0 font-lucky text-xl'>
          Edit Profile
        </DialogTitle>
        <InnerComponent />
      </DialogContent>
    </Dialog>
  )
}

const InnerComponent = () => {
  const { currentUser, currentUserData, updateUserData } = useUserContext()
  const [loading, setLoading] = useState(false)
  const closeRef = React.useRef<HTMLButtonElement>(null)

  const [name, setName] = useState(currentUserData?.name || '');
  const [phone, setPhone] = useState(currentUserData?.shipping.phoneNumber || '');
  const [birthday, setBirthday] = useState(currentUserData?.birthday || '');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!currentUser) return

    let ph = phone.replaceAll(' ', '')
    if (!ph.startsWith('+91')) ph = '+91' + ph

    if (!name) {
      return toast.error('Name is required')
    }
    if (!ph || !/^\+91\d{10}$/.test(ph)) {
      return toast.error('Phone number is invalid')
    }
    if (!birthday) {
      return toast.error('Birthday is required')
    }

    try {
      setLoading(true)
      await updateUserData({
        name,
        birthday,
        shipping: {
          ...(currentUserData?.shipping || {}),
          phoneNumber: ph
        }
      } as UserData)
      toast.success('Profile updated successfully')
      closeRef.current?.click()
    } catch (e) {
      console.error(e)
      toast.error('Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='p-4 pt-0 flex flex-col gap-2'>
      <div>
        <label htmlFor='name' className='text-sm font-bold'>Name</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} name='name' type='text' placeholder='Your name' />
      </div>
      <div>
        <label htmlFor='phone' className='text-sm font-bold'>Phone Number</label>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' type='text' placeholder='+91 98xxx 12xxx' />
      </div>
      <div>
        <label htmlFor='birthday' className='text-sm font-bold'>Birthday</label>
        <Input value={birthday} onChange={(e) => setBirthday(e.target.value)} name='birthday' type='date' placeholder='Birthday' />
      </div>
      <div className='self-end flex gap-2 justify-end'>
        <DialogClose asChild>
          <Button ref={closeRef} type="button" variant='ghost' className='mt-4'>
            Cancel
          </Button>
        </DialogClose>
        <Button disabled={loading} type="submit" className='mt-4'>
          {loading ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  )
}