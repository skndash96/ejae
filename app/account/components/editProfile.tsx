import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { ReactNode } from 'react'

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

      <DialogContent>
        <DialogTitle className='font-lucky text-xl'>
          Edit Profile
        </DialogTitle>
        <InnerComponent />
      </DialogContent>
    </Dialog>
  )
}

const InnerComponent = () => {
  return (
    <div className='bg-white p-4'>
      Hi
    </div>
  )
}