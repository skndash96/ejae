import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#" },
  { name: "Customization", href: "#" },
  { name: "Social Media", href: "#" },
  { name: "Happy Customers", href: "#" },
]

export function Header() {
  return (
    <header className="py-4 flex justify-between gap-4">
      <h1 className="px-4">
        <Image src='/images/logo.png' width={50} height={30} alt="Logo" />
      </h1>

      <ul className="px-12 max-lg:hidden flex gap-8 text-sm items-center bg-white rounded-tl-xl rounded-br-xl shadow-[2px_4px_black]">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="font-bangers">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="px-4 flex items-center">
        <Link href="#" className="px-4 py-2 text-sm  bg-yellow-300 rounded-tl-xl rounded-br-xl border border-black font-lucky">
          Login
        </Link>
        <Link href="/" className="px-4">
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
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}