'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeClosed } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const email = data.get('email') as string
    const password = data.get('password') as string
    const confirmPassword = data.get('confirmPassword') as string

    //validate
    console.log(email, password, confirmPassword)
  }

  return (
    <div className='px-8 py-12 grow flex justify-center items-center flex-row gap-20'>
      <form onSubmit={handleSubmit} className='px-8 py-6 w-full max-w-xl bg-[#eee] rounded-xl shadow-[5px_5px_black]'>
        <h1 className='text-5xl text-center font-bangers drop-shadow-[2px_2px_white]'>
          Sign Up
        </h1>

        <label className='mt-3 block font-comic' htmlFor="email">
          Email
        </label>

        <Input className='mt-1 py-3 h-auto font-comic bg-neutral-300 shadow-[3px_3px_black]' placeholder='name@example.com' type="email" name="email" />

        <label className='mt-3 block font-comic' htmlFor="password">
          Password
        </label>

        <div className='relative'>
          <Input className='mt-1 pr-12 py-3 h-auto font-comic bg-neutral-300 shadow-[3px_3px_black]' placeholder='Enter password' type={showPassword ? 'text' : 'password'} name="password" />
          <Button variant='ghost' type='button' onClick={() => setShowPassword(b => !b)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:bg-transparent cursor-pointer'>
            {showPassword ? (
              <EyeClosed />
            ) : (
              <Eye />
            )}
          </Button>
        </div>

        <label className='mt-3 block font-comic' htmlFor="confirmPassword">
          Confirm Password
        </label>

        <div className='relative'>
          <Input className='mt-1 pr-12 py-3 h-auto font-comic bg-neutral-300 shadow-[3px_3px_black]' placeholder='Enter password' type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" />
          <Button variant='ghost' type='button' onClick={() => setShowConfirmPassword(b => !b)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:bg-transparent cursor-pointer'>
            {showConfirmPassword ? (
              <EyeClosed />
            ) : (
              <Eye />
            )}
          </Button>
        </div>

        <Button className='mt-8 px-20 py-3 h-auto block mx-auto font-lucky rounded-xl bg-black text-white shadow-[3px_3px_var(--color-orange-300)]' type="submit">
          Sign Up
        </Button>

        <div className='mt-12 text-sm text-center'>
          Have an account? <Link href="/sign-in" className='text-orange-600'> Sign in </Link>
        </div>
      </form>

      <div className='max-md:hidden self-end'>
        <Image className='z-[-1] -scale-x-100' src="/images/char-cool.png" width={200} height={300} alt="Charecter" />
      </div>

      <Image className="z-[-1] object-cover top-0" src="/images/bg-dots.png" alt="Background" fill aria-hidden />

      <Image className='z-[-1] object-cover bottom-0' src="/images/bg-cloud.png" alt="Background" fill aria-hidden />
    </div>
  )
}
