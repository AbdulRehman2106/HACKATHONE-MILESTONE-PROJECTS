"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
    
      setIsOpen(!isOpen);
    }

  return (

          <>
          
          <nav className="bg-white py-4 px-6 shadow-md">
      
            <div className="max-w-[1440px] flex items-center justify-between">
      
              <div className="text-2xl font-extrabold text-gray-800">Bandage</div>
      
              <button
               onClick={toggleMenu}
               className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none">
                 
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
      
                  <div className="hidden md:flex gap-8 text-sm font-extrabold text-gray-600">
      
                  <Link href="/" className="hover:text-gray-900">Home</Link>
                  <Link href="/productpage" className="hover:text-gray-900">Product</Link>
                  <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
                  <Link href="/contact" className="hover:text-gray-900">Contact</Link>
                  </div>
      
      
                    <div className="hidden md:flex items-center gap-4">
      
                              <Link href="#" className="text-sm font-extrabold text-blue-500 hover:underline">Login</Link>
      
                              <button className="px-5 py-2 bg-blue-500 text-white text-sm font-extrabold rounded-lg shadow-md hover:bg-blue-600 transition ">Become A Member →</button>
                          </div>
                      </div>
      
                      {isOpen && (
      
                          <div className="mt-4 space-y-4 md:hidden">
      
                              <Link href="/" className="block text-sm font-extrabold text-gray-600 hover:text-gray-900">Home</Link>
                              <Link href="/productpage" className="block text-sm font-extrabold text-gray-600 hover:text-gray-900">Product</Link>
                              <Link href="/pricing" className="block text-sm font-extrabold text-gray-600 hover:text-gray-900">Pricing</Link>
                              <Link href="/contact" className="block text-sm font-extrabold text-gray-600 hover:text-gray-900">Contact</Link>
                              <Link href="#" className="block text-sm font-extrabold text-blue-500 hover:underline">Login</Link>
      
                              <button className="w-full px-5 py-2 bg-blue-500 text-white text-sm font-extrabold rounded-lg shadow-md hover:bg-blue-600 transition">Become A Member →</button>
                          </div>
                      )}
          </nav>
          
          
          </>
      
            )
      
}

export default Navbar
