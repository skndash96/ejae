'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUserContext } from '@/context/userContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

export default function ResetPassword() {
  const { forgotPassword } = useUserContext()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    forgotPassword(email)
      .then(() => {
        toast.success('Password reset email sent. Please follow the instructions in the email.')
        router.push('/sign-in')
      })
      .catch((e) => {
        toast.error('Error sending password reset email')
        console.log(e)
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className='p-8 relative grow flex justify-center items-center flex-row gap-20'>
      <form onSubmit={handleSubmit} className='px-8 py-6 w-full max-w-xl bg-[#eee] rounded-xl shadow-[5px_5px_black]'>
        <h1 className='text-3xl text-center font-bangers drop-shadow-[2px_2px_white]'>
          Reset Password
        </h1>

        <label className='mt-3 block text-sm' htmlFor="newPassword">
          Email
        </label>
        <Input
          className='mt-1 py-2 h-auto bg-neutral-300 shadow-[3px_3px_black]'
          placeholder='Enter new password'
          type="email"
          name="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          disabled={loading}
          className='mt-12 px-20 py-2 h-auto block mx-auto font-lucky rounded-xl bg-black text-white shadow-[3px_3px_var(--color-orange-300)]'
          type="submit"
        >
          {loading ? 'Loading...' : 'Reset Password'}
        </Button>

        <div className='mt-12 text-sm text-center'>
          Remembered your password? <Link href="/sign-in" className='text-blue-600'> Sign in </Link>
        </div>
      </form>

      <div className='max-md:hidden self-end'>
        <Image className='z-[-1] -scale-x-100' src="/images/char-cool.png" width={200} height={300} alt="Character" />
      </div>

      <Image className="z-[-1] object-cover top-0" src="/images/bg-dots.png" alt="Background" fill aria-hidden />

      <Image className='z-[-1] object-cover bottom-0' src="/images/bg-cloud.png" alt="Background" fill aria-hidden />
    </div>
  )
}
