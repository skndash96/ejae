'use client'
import { useUserContext } from '@/context/userContext'
import { ListChecks, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './components/logoutButton'
import EditProfile from './components/editProfile'
import { Button } from '@/components/ui/button'
import EditAddress from './components/editAddress'

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

        <EditAddress trigger={
          <Button className='h-auto font-lucky flex justify-center items-center gap-4 rounded-xl text-black bg-white hover:bg-gray-200 border border-black shadow-[4px_4px_black]'>
            <User strokeWidth={3} />
            Edit Address
          </Button>
        } />
      </div>

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {[
          {
            name: 'Previous Orders',
            href: '/account/orders',
            icon: ListChecks
          },
          {
            name: 'Previous Orders',
            href: '/account/orders',
            icon: ListChecks
          },
          {
            name: 'Previous Orders',
            href: '/account/orders',
            icon: ListChecks
          },
          {
            name: 'Previous Orders',
            href: '/account/orders',
            icon: ListChecks
          },
          {
            name: 'Previous Orders',
            href: '/account/orders',
            icon: ListChecks
          },
          {
            name: 'Previous Orders',
            href: '/account/orders',
            icon: ListChecks
          },
        ].map(({ name, href, icon: Icon }, i) => (
          <Link key={name + i.toString()} href={href} className='p-4 flex sm:justify-center items-center gap-4 rounded-xl bg-white hover:bg-gray-200 border border-black shadow-[4px_4px_black]'>
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
