'use client'
import { useUserContext } from '@/context/userContext'
import React from 'react'
import LogoutButton from './components/logoutButton'
import EditProfile from './components/editProfile'
import { Button } from '@/components/ui/button'
// import EditAddress from './components/editAddress'
import { User } from 'lucide-react'

export default function AccountPage() {
  const { currentUser } = useUserContext()

  return (
    <div className='p-8 w-full max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bangers'>
        Account
      </h1>

      <h2 className='text-xl'>
        Hello {currentUser?.displayName}!
      </h2>

      <div className='flex gap-4'>
        <EditProfile trigger={
          <Button className='h-auto font-lucky flex justify-center items-center gap-4 rounded-xl text-black bg-white hover:bg-gray-200 border border-black shadow-[4px_4px_black]'>
            <User strokeWidth={3} />
            Edit Profile
          </Button>
        } />

        {/* <EditAddress trigger={
          <Button className='h-auto font-lucky flex justify-center items-center gap-4 rounded-xl text-black bg-white hover:bg-gray-200 border border-black shadow-[4px_4px_black]'>
            <User strokeWidth={3} />
            Edit Address
          </Button>
        } /> */}
      </div>

      <div className='mt-12'>
        <h2 className='font-bangers text-2xl'>
          Account Actions
        </h2>

        <LogoutButton />
      </div>
    </div>
  )
}
