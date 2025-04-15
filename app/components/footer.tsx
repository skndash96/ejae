import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className='bg-gray-950 text-white p-8'>
      <div className='flex flex-wrap gap-8'>
        <div className='text-sm'>
          <span className='text-lg font-semibold'>
            Quick Links
          </span>

          <ul className='mt-4 flex gap-4 flex-wrap'>
            {[
              {
                name: 'About Us',
                href: '/#about'
              },
              {
                name: 'Contact Us',
                href: '/#footer'
              },
              {
                name: 'FAQs',
                href: '/#faqs'
              },
              {
                name: 'Customization',
                href: '/#customization'
              },
              {
                name: 'Reviews',
                href: '/#testimonials'
              },
            ].map((item, i) => (
              <li key={i}>
                <Link href={item.href} className='hover:text-yellow-300'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='mt-4 flex gap-2'>
            <Link href="tel:+917023530736" className='flex items-center gap-2 w-fit rounded-xl bg-yellow-300 text-black font-semibold p-2'>
              <Phone />
              Call Us
            </Link>

            <Link href={`https://wa.me/+917023530736?text=${encodeURIComponent("Hey! I'm reaching you out from the Ejae website.")}`} className='flex items-center gap-2 w-fit rounded-xl bg-green-400 text-black font-semibold p-2'>
              <MessageCircle />
              Whatsapp
            </Link>
          </div>

          <div className='mt-12  flex gap-2'>
            <Link href="/terms-and-conditions" className='text-xs hover:text-yellow-300'>
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className='text-xs hover:text-yellow-300 ml-4'>
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className='text-xs hover:text-yellow-300 ml-4'>
              Refund Policy
            </Link>
          </div>
        </div>

        <ul className='w-fit md:ml-auto h-fit flex gap-6'>
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

      </div>
    </footer>
  )
}
