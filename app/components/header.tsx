'use client'
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/context/cartContext";
import { useFavourites } from "@/context/favContext";
import { useUserContext } from "@/context/userContext";
import { Heart, Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "/#" },
  { name: "Products", href: "/products" },
  { name: "Customization", href: "/customization" },
  { name: "Social Media", href: "/#footer" },
  { name: "Happy Customers", href: "/#testimonials" },
]

export function Header() {
  const cart = useCart()
  const { favourites } = useFavourites()
  const { currentUser, userLoading } = useUserContext()

  return (
    <header className="py-4 sticky z-[3] top-0 bg-[#d9d9d9bb] backdrop-blur-lg flex justify-between gap-4 border-neutral-400 border-b">
      <h1 className="px-4">
        <Link href="/">
          <Image src='/images/logo.png' width={50} height={30} alt="Logo" />
        </Link>
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

      <div className="px-4 flex items-center gap-6">
        <Link href="/favourites" className="relative">
          <Heart className="text-white fill-white drop-shadow-[2px_2px_black]" size={26} />
          {favourites.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-yellow-300 text-black text-xs font-bold rounded-full px-1">
              {favourites.length}
            </span>
          )}
        </Link>

        <Link href="/cart" className="relative">
          <Image className='drop-shadow-[2px_2px_black]' src="/images/shop.png" width='26' height='26' alt="Cart" />
          {cart.state.items.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-yellow-300 text-black text-xs font-bold rounded-full px-1">
              {cart.state.items.length}
            </span>
          )}
        </Link>

        {userLoading ? (
          <Skeleton className="w-24 h-full" />
        ) : currentUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="-mb-1 block">
                <User size={26} className="bg-white rounded-xl drop-shadow-[2px_2px_black]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/my-orders">My Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/account">Account</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/sign-up" className="px-4 py-2 text-sm bg-yellow-300 rounded-tl-xl rounded-br-xl border border-black font-lucky">
            Sign Up
          </Link>
        )}

        <Drawer direction="right">
          <DrawerTrigger className="lg:hidden">
            <Menu className="text-white drop-shadow-[2px_2px_black]" />
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <DrawerHeader>
              <div className="flex justify-between items-center">
                <DrawerTitle className="font-lucky">Menu</DrawerTitle>
                <DrawerClose className="cursor-pointer">
                  <X />
                </DrawerClose>
              </div>
            </DrawerHeader>

            <ul className="p-4 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <DrawerClose asChild>
                    <Link href={link.href} className="font-bangers">
                      {link.name}
                    </Link>
                  </DrawerClose>
                </li>
              ))}

              <li>
                <DrawerClose asChild>
                  <Link href="/my-orders" className="font-bangers">My Orders</Link>
                </DrawerClose>
              </li>

              {currentUser ? (
                <li>
                  <DrawerClose asChild>
                    <Link href="/account" className="font-bangers">Account</Link>
                  </DrawerClose>
                </li>
              ) : (
                <div className="grid grid-cols-2 gap-2 place-items-center">
                  <li className="w-full">
                    <DrawerClose asChild>
                      <Link href="/sign-in" className="block font-bangers rounded-tl-xl rounded-br-xl border border-black p-2 text-center">Log in</Link>
                    </DrawerClose>
                  </li>
                  <li className="w-full">
                    <DrawerClose asChild>
                      <Link href="/sign-up" className="block font-bangers rounded-tl-xl rounded-br-xl bg-yellow-300 border border-black p-2 text-center">Sign Up</Link>
                    </DrawerClose>
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
