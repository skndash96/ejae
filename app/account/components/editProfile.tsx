'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogOverlay, DialogContent, DialogPortal, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useUserContext } from '@/context/userContext'
import { firestore } from '@/utils/init-firebase'
import { doc } from 'firebase/firestore'
import React, { FormEvent, ReactNode, useState } from 'react'
import { setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

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
  const { currentUser, currentUserData } = useUserContext()
  const [loading, setLoading] = useState(false)
  const closeRef = React.useRef<HTMLButtonElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!currentUser) return

    const formData = new FormData(e.currentTarget)

    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const birthday = formData.get('birthday') as string

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

    const docRef = doc(firestore, 'users', currentUser.uid)

    try {
      setLoading(true)
      await setDoc(docRef, { uid: currentUser.uid, name, phone: ph, birthday }, { merge: true })
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
        <Input defaultValue={currentUserData?.name || ''} name='name' type='text' placeholder='Your name' />
      </div>
      <div>
        <label htmlFor='phone' className='text-sm font-bold'>Phone Number</label>
        <Input defaultValue={currentUserData?.phone} name='phone' type='text' placeholder='+91 98xxx 12xxx' />
      </div>
      <div>
        <label htmlFor='birthday' className='text-sm font-bold'>Birthday</label>
        <Input defaultValue={currentUserData?.birthday} name='birthday' type='date' placeholder='Birthday' />
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