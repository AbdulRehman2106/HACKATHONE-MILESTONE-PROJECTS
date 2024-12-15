"use client"

import React, { useState } from 'react'
import { UserIcon,MagnifyingGlassIcon,ShoppingCartIcon,HeartIcon,} from "@heroicons/react/24/outline";
import Link from "next/link";

const Topheader = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {setIsOpen(!isOpen);
};

  return (
        <>
        
    <div className="hidden md:flex bg-[#1a1a2e] text-white py-2 px-4 md:px-8 text-sm justify-between items-center">

        <div className="flex items-center gap-2 sm:gap-4">

          <span className='font-extrabold'>📞 (225) 555-0118</span>

          <span className='font-extrabold'>✉️ michelle.rivera@example.com</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-9 mt-2 sm:mt-0">

          <span className="hidden sm:inline font-extrabold">Follow Us and get a chance to win 80% off</span>
          
          <div className="flex items-center gap-2">

            <span className="hidden sm:inline font-extrabold">Follow Us:</span>

            <img src="/about/insta2.png" alt="Instagram" className="w-4 h-4 " />
            <img src="/about/Icon-Facebook.png" alt="Facebook" className="w-4 h-4" />
            <img src="/about/Icon-Twitter2.png" alt="Twitter" className="w-4 h-4" />
            <img src="/about/link2.png" alt="YouTube" className="w-4 h-4" />
          </div>
        </div>
      </div>

    <nav className="bg-white shadow-md">

    <div className="py-4 px-4 md:px-8 flex justify-between items-center max-w-[1440px] mx-auto">

        <div className="text-xl font-extrabold">Bandage</div>

        <div className="hidden lg:flex gap-6">

        <Link href="/" className="text-gray-700 hover:text-blue-500 font-extrabold ">Home</Link>
        <Link href="/shop" className="text-gray-700 hover:text-blue-500 font-extrabold ">Shop</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500 font-extrabold ">About</Link>
        <Link href="#" className="text-gray-700 hover:text-blue-500 font-extrabold ">Blog</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500 font-extrabold ">Contact</Link>
        <Link href="#" className="text-gray-700 hover:text-blue-500 font-extrabold ">Pages</Link>
        </div>

        <div className="flex items-center gap-3">

            <Link href="#" className="flex items-center gap-1 text-blue-500">

            <UserIcon className='w-5 h-5' />

            <span className="hidden md:inline font-extrabold">Login  /  Register </span>
            </Link>

            <MagnifyingGlassIcon  className='w-5 h-5 text-blue-500' />

            <Link href="/productpage">

            <div className="flex items-center gap-1">

            <ShoppingCartIcon className='w-5 h-5 text-blue-500' />

            <span className="text-sm text-blue-500 font-extrabold">1</span>
        </div>
    </Link>

    <div className="flex items-center gap-1">

            <HeartIcon className="w-5 h-5 text-blue-500" />
              
            <span className="text-sm text-blue-500 font-extrabold">1</span>
            </div>
        </div>

    <button onClick={toggleMenu} className="block lg:hidden text-gray-700 hover:text-gray-800 focus:outline-none">

            <svg

              xmlns="http://www.w3.org/2000/svg"
            
              className="h-6 w-6"
            
              fill="none"
            
              viewBox="0 0 24 24"
            
              stroke="currentColor">

              <path

                strokeLinecap="round"

                strokeLinejoin="round"

                strokeWidth="2"

                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
            </svg>
    </button>
    </div>

            {isOpen && (

                <div className="lg:hidden bg-white shadow-md py-4 px-4 flex flex-col gap-4">

            <Link href="/" className="text-gray-700 hover:text-blue-500 font-extrabold">Home</Link>

            <Link href="/shop" className="text-gray-700 hover:text-blue-500 font-extrabold">Shop</Link>

            <Link href="/about" className="text-gray-700 hover:text-blue-500 font-extrabold">About</Link>

            <Link href="#" className="text-gray-700 hover:text-blue-500 font-extrabold">Blog</Link>

            <Link href="/contact" className="text-gray-700 hover:text-blue-500 font-extrabold">Contact</Link>

            <Link href="#" className="text-gray-700 hover:text-blue-500 font-extrabold">Pages</Link>

                </div>
                )}
            </nav>
        </>
    )
}

export default Topheader
