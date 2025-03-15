'use client'
import { useUserContext } from '@/context/userContext'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const protectedRoutes = [
  "/account"
]

export default function ProtectRoute() {
  const { currentUser, userLoading } = useUserContext()
  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (userLoading) return
    
    const isProtected = protectedRoutes.some(route => path.startsWith(route))

    if (isProtected && !currentUser) {
      router.push('/')
    }
  }, [path, router, currentUser, userLoading])
  
  return null
}
