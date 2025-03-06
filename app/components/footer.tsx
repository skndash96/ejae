import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-950 text-white p-8'>
      <div className='flex flex-wrap gap-20'>
        <div className='text-sm'>
          <span className='text-lg font-semibold'>
            Quick Links
          </span>

          <ul className='mt-4 flex flex-col gap-1'>
            {[
              {
                name: 'About Us',
                href: '/about'
              },
              {
                name: 'Contact Us',
                href: '/about'
              },
              {
                name: 'FAQs',
                href: '/about'
              },
              {
                name: 'Customization',
                href: '/about'
              },
              {
                name: 'Reviews',
                href: '/about'
              },
            ].map((item, i) => (
              <li key={i}>
                <Link href={item.href} className='hover:text-yellow-300'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='text-sm'>
          <span className='text-lg font-semibold'>
            Quick Links
          </span>

          <ul className='mt-4 flex flex-col gap-1'>
            {[
              {
                name: 'About Us',
                href: '/about'
              },
              {
                name: 'Contact Us',
                href: '/about'
              },
              {
                name: 'FAQs',
                href: '/about'
              },
              {
                name: 'Customization',
                href: '/about'
              },
              {
                name: 'Reviews',
                href: '/about'
              },
            ].map((item, i) => (
              <li key={i}>
                <Link href={item.href} className='hover:text-yellow-300'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='text-sm'>
          <span className='text-lg font-semibold'>
            Quick Links
          </span>

          <ul className='mt-4 flex flex-col gap-1'>
            {[
              {
                name: 'About Us',
                href: '/about'
              },
              {
                name: 'Contact Us',
                href: '/about'
              },
              {
                name: 'FAQs',
                href: '/about'
              },
              {
                name: 'Customization',
                href: '/about'
              },
              {
                name: 'Reviews',
                href: '/about'
              },
            ].map((item, i) => (
              <li key={i}>
                <Link href={item.href} className='hover:text-yellow-300'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='text-sm'>
          <span className='text-lg font-semibold'>
            Quick Links
          </span>

          <ul className='mt-4 flex flex-col gap-1'>
            {[
              {
                name: 'About Us',
                href: '/about'
              },
              {
                name: 'Contact Us',
                href: '/about'
              },
              {
                name: 'FAQs',
                href: '/about'
              },
              {
                name: 'Customization',
                href: '/about'
              },
              {
                name: 'Reviews',
                href: '/about'
              },
            ].map((item, i) => (
              <li key={i}>
                <Link href={item.href} className='hover:text-yellow-300'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className='mt-8 w-fit ml-auto flex gap-6'>
        {[
          {
            icon: <Facebook className='hover:text-blue-400' size={18} />,
            href: 'https://facebook.com',
          },
          {
            icon: <Instagram className='hover:text-red-400' size={18} />,
            href: 'https://instagram.com',
          },
          {
            icon: <Linkedin className='hover:text-blue-400' size={18} />,
            href: 'https://linkedin.com',
          },
          {
            icon: <Youtube className='hover:text-red-400' size={18} />,
            href: 'https://youtube.com',
          }
        ].map((item, i) => (
          <li key={i} className='p-2 border border-white rounded-full'>
            <Link href={item.href} className='hover:text-yellow-300'>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
