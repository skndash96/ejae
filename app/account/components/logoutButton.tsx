'use client'
import { Button } from '@/components/ui/button'
import { useUserContext } from '@/context/userContext'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LogoutButton() {
  const { logoutUser } = useUserContext()
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(null)

  const handleSignout = () => {
    setError(null)
    setLoading(true)

    logoutUser()
      .then(() => {
        router.push('/')
        setSuccess(true)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      {error && (
        <div className='bg-red-100 text-center text-red-700 p-4 rounded-md'>
          {error}
        </div>
      )}

      <Button disabled={loading} onClick={handleSignout} variant='destructive' className='mt-4 cursor-pointer font-lucky shadow-[4px_4px_black]'>
        {success && (
          <Check />
        )}
        Sign Out
      </Button>
    </div>
  )
}
