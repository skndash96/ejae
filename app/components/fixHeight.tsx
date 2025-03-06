'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"

const matcher = [
  '/products'
]

export default function FixHeight() {
  const path = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (matcher.some(p => path.startsWith(p))) {
        if (window.matchMedia('(min-width: 1024px)').matches) { // lg breakpoint
          document.getElementById('wrapper')!.style.height = '100vh'
        }
      } else {
        document.getElementById('wrapper')!.style.height = 'auto'
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [path])

  return null
}