'use client'
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserContext } from "@/context/userContext";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Social Media", href: "/#footer" },
  { name: "Happy Customers", href: "/#testimonials" },
]

export function Header() {
  const { currentUser, userLoading } = useUserContext()

  return (
    <header className="py-4 sticky z-[3] top-0 bg-[#d9d9d9bb] backdrop-blur-lg flex justify-between gap-4 border-neutral-400 border-b">
      <h1 className="px-4">
        <Image src='/images/logo.png' width={50} height={30} alt="Logo" />
      </h1>

      <ul className="px-12 max-lg:hidden flex gap-8 items-center bg-white rounded-tl-xl rounded-br-xl shadow-[2px_4px_black]">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="font-bangers">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="px-4 flex items-center">
        {userLoading ? (
          <Skeleton className="w-24 h-full" />
        ) : currentUser ? (
          <Link href="/account" className="px-4 py-2 text-sm  bg-white rounded-tl-xl rounded-br-xl border border-black font-lucky">
            Account
          </Link>
        ) : (
          <Link href="/sign-up" className="px-4 py-2 text-sm  bg-yellow-300 rounded-tl-xl rounded-br-xl border border-black font-lucky">
            Sign Up
          </Link>
        )}

        <Link href="/cart" className="px-4">
          <Image className='drop-shadow-[2px_2px_black]' src="/images/shop.png" width='26' height='26' alt="Cart" />
        </Link>

        <Drawer direction="right">
          <DrawerTrigger className="lg:hidden">
            <Menu className="text-white drop-shadow-[2px_2px_black]" />
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <DrawerHeader>
              <div className="flex justify-between items-center">
                <DrawerTitle className="font-lucky">
                  Menu
                </DrawerTitle>

                <DrawerClose className="cursor-pointer">
                  <X />
                </DrawerClose>
              </div>
            </DrawerHeader>

            <ul className="p-4 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-bangers">
                    {link.name}
                  </Link>
                </li>
              ))}

              {currentUser ? (
                <li>
                  <Link href="/account" className="font-bangers">
                    Account
                  </Link>
                </li>
              ) : (
                <div className="grid grid-cols-2 gap-2 place-items-center">
                  <li className="w-full">
                    <Link href="/sign-in" className="block font-bangers rounded-tl-xl rounded-br-xl border border-black p-2 text-center">
                      Log in
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/sign-up" className="block font-bangers rounded-tl-xl rounded-br-xl bg-yellow-300 border border-black p-2 text-center">
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}