"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../../public/images/logo.svg";
import Cart from "../../../public/images/icon-cart.svg"
import PersonPlaceholder from "../../../public/images/image-avatar.png"
import Menu from "../../../public/images/icon-menu.svg"
import Link from 'next/link'
import MobileSidebar from './MobileSidebar';

interface Props {

}

function Header(props: Props) {
  const { } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='w-full mx-auto'>
      <nav className='sticky right-0 top-0 p-3 border-b-2' style={{ borderBottom: "1px solid #e5e7eb" }}>
        <div className="flex justify-between w-full py-4">
          <div className='flex items-center gap-4 lg:gap-16 w-full'>
            <div className='block lg:hidden' onClick={toggleMenu}>
              <Image src={Menu} alt="Menu" width={20} height={50} unoptimized />
            </div>
            <Link href="/">
              <Image src={Logo} alt="Logo Sneekers" width={100} height={50} quality={100} unoptimized />
            </Link>
            <div className='hidden lg:flex gap-11 text-sm text-gray-500'>
              <Link href="/collections">Collections</Link>
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className='flex gap-8 items-center'>
            <div>
              <Image src={Cart} alt="Add to cart" width={25} height={50} quality={100} unoptimized />
            </div>
            <div>
              <Image src={PersonPlaceholder} alt="Person" width={30} height={50} quality={100} unoptimized />
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && <MobileSidebar isOpen={menuOpen} onClose={toggleMenu} />}
    </div>
  )
}

export default Header
