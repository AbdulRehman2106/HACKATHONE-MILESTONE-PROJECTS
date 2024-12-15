import { EyeIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from 'react'
import Additionalinfo from "./Additionalinfo"
import Topheader from "./Topheader";
import Navbar from "./Navbar";


const Productpage = () => {

  return (
   
    <>

      <Topheader />

      <Navbar />

      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">

        <div className="max-w-[1440px] mx-auto text-sm text-gray-500 mb-6 font-extrabold">

      <span>Home</span> &gt; <span>Shop</span>
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="flex flex-col">

            <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">

              <img
                src="/images/pro.jpg"
                alt="Main Product"
                className="w-full h-full object-cover"/>

              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2">&lt;</button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2">&gt;</button>
            </div>

            <div className="flex justify-center gap-4 mt-4">

              {["/images/pro1.png" , "/images/pro1.png"].map((thumb, index) => (

                <img 
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1 }`} 
                className="w-20 h-20 object-cover rounded-lg border border-gray-300 hover:border-blue-500 font-extrabold" />
                )
              )}
            </div>
          </div>

          <div className="flex flex-col justify-between">

            <div>

              <h1 className="text-2xl font-extrabold text-gray-800">Floating Phone</h1>

              <div className="flex items-center mt-2">

                <div className="flex text-yellow-400 text-sm">★★★★★</div>

                <span className="text-sm text-gray-500 ml-2 font-extrabold">(10 Reviews)</span>
              </div>

              <p className="text-lg font-extrabold text-gray-800 mt-4">$1.139.33</p>
              <p className="text-sm text-gray-900 mt-1 font-extrabold">Availability: <span className="text-green-500 font-extrabold">In Stock</span></p>
              <p className="text-sm text-gray-600 mt-4 font-bold">Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent. Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met.</p>
            </div>

              <div className="mt-6">

                <h3 className="text-sm font-extrabold text-gray-800 mb-2">Colors</h3>

                <div className="flex gap-4">

                  {["bg-green-500" , "bg-orange-500" , "bg-blue-500", "bg-gray-700"].map(

                    (color, index) => (

                      <span
                      key={index}
                      className={`w-8 h-8 ${color} rounded-full border border-gray-300 hover:scale-110 cursor-pointer`} />
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-4">

                <div className="bg-blue-500 text-white px-6 py-2 rounded-lg font-extrabold shadow hover:bg-blue-600 cursor-pointer">Select Option</div>

                <div className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300"><ShoppingCartIcon className="h-5 w-5"/></div>

                <button className="bg-gray-200 rounded-lg hover:bg-gray-300"><HeartIcon className="h-5 w-5"/></button>
                <button className="bg-gray-200 rounded-lg hover:bg-gray-300"><EyeIcon className="h-5 w-5"/></button>
              </div>
          </div>
      </div>
    <Additionalinfo />
</div>
    
    </>
  )
}

export default Productpage
