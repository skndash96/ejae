'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUserContext } from '@/context/userContext'
import { Eye, EyeClosed } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'

export default function Signup() {
  const router = useRouter()
  const { currentUser, signInWithGoogle, registerUser } = useUserContext()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (currentUser) {
      router.push('/')
    }
  }, [])

  const handleGoogle = () => {
    setLoading(true)
    setError('')

    signInWithGoogle()
      .then(() => {
        router.push('/')
      })
      .catch((e) => {
        setError(e.message)
        console.log(e)
      })
      .finally(() => setLoading(false))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const email = data.get('email') as string
    const password = data.get('password') as string
    const confirmPassword = data.get('confirmPassword') as string

    if (!email || !password || !confirmPassword) {
      return setError('Please fill all fields')
    }
    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }
    if (password.length < 6) {
      return setError('Password must be at least 6 characters')
    }
    if (!email.includes('@')) {
      return setError('Invalid email')
    }

    setLoading(true)
    setError('')

    registerUser(email, password)
      .then(() => {
        router.push('/')
      })
      .catch((e) => {
        setError(e.message)
        console.log(e)
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className='p-8 relative grow flex justify-center items-center flex-row gap-20'>
      <form onSubmit={handleSubmit} className='px-8 py-6 w-full max-w-xl bg-[#eee] rounded-xl shadow-[5px_5px_black]'>
        <h1 className='text-3xl text-center font-bangers drop-shadow-[2px_2px_white]'>
          Sign Up
        </h1>

        <div className='py-4 border-b border-gray-400'>
          <Button disabled={loading} onClick={handleGoogle} className='px-20 py-2 h-auto mx-auto font-lucky flex items-center gap-2 rounded-xl bg-blue-500 text-white shadow-[3px_3px_var(--color-orange-300)]' type="button">
            <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
            Continue with Google
          </Button>
        </div>

        <label className='mt-3 block text-sm' htmlFor="email">
          Email
        </label>

        <Input className='mt-1 py-2 h-auto bg-neutral-300 shadow-[3px_3px_black]' placeholder='name@example.com' type="email" name="email" />

        <label className='mt-3 block text-sm' htmlFor="password">
          Password
        </label>

        <div className='relative'>
          <Input className='mt-1 pr-12 py-2 h-auto bg-neutral-300 shadow-[3px_3px_black]' placeholder='Enter password' type={showPassword ? 'text' : 'password'} name="password" />
          <Button variant='ghost' type='button' onClick={() => setShowPassword(b => !b)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:bg-transparent cursor-pointer'>
            {showPassword ? (
              <EyeClosed />
            ) : (
              <Eye />
            )}
          </Button>
        </div>

        <label className='mt-3 block text-sm' htmlFor="confirmPassword">
          Confirm Password
        </label>

        <div className='relative'>
          <Input className='mt-1 pr-12 py-2 h-auto bg-neutral-300 shadow-[3px_3px_black]' placeholder='Enter password' type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" />
          <Button variant='ghost' type='button' onClick={() => setShowConfirmPassword(b => !b)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:bg-transparent cursor-pointer'>
            {showConfirmPassword ? (
              <EyeClosed />
            ) : (
              <Eye />
            )}
          </Button>
        </div>

        {error && (
          <div className='mt-4 text-red-500 text-center'>
            {error}
          </div>
        )}

        <Button disabled={loading} className='mt-4 px-20 py-2 h-auto block mx-auto font-lucky rounded-xl bg-black text-white shadow-[3px_3px_var(--color-orange-300)]' type="submit">
          Sign Up
        </Button>

        <div className='mt-12 text-sm text-center'>
          Have an account? <Link href="/sign-in" className='text-blue-600'> Sign in </Link>
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
