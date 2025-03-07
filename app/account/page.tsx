'use client'
import { useUserContext } from '@/context/userContext'
import { ListChecks, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './components/logoutButton'
import EditProfile from './components/editProfile'
import { Button } from '@/components/ui/button'

export default function AccountPage() {
  const { currentUser } = useUserContext()

  return (
    <div className='p-8 w-full max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bangers'>
        Account
      </h1>

      <h2 className='text-xl'>
        Hello {currentUser?.displayName}!
      </h2>

      <EditProfile trigger={
        <Button className='h-auto font-lucky flex justify-center items-center gap-4 rounded-xl text-black bg-white hover:bg-gray-200 border border-black shadow-[4px_4px_black]'>
          <User strokeWidth={3} />
          Edit Profile
        </Button>
      } />

      <div className='mt-8 flex flex-wrap gap-4'>
        {[
          {
            name: 'Previous Orders',
            href: '/account/orders',
            icon: ListChecks
          },
        ].map(({ name, href, icon: Icon }) => (
          <Link key={name} href={href} className='p-4 flex justify-center items-center gap-4 rounded-xl bg-white hover:bg-gray-200 border border-black shadow-[4px_4px_black]'>
            <Icon strokeWidth={3} />
            <h2 className='font-lucky'>
              {name}
            </h2>
          </Link>
        ))}
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
