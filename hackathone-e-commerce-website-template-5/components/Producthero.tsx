import React from 'react'

const Producthero = () => {

  return (

    <div className='w-full bg-[#23856D] mt-[30px] relative border rounded-md overflow-hidden'>

      <div className="max-w-[1440px] mx-auto h-[709px] flex items-center px-6 md:px-12">

      <div className="flex-1 text-white space-y-6">

        <h4 className="font-Montserrat text-lg font-bold uppercase">Summer 2020</h4>

        <h1 className="font-Montressat text-3xl md:text-5xl font-extrabold leading-snug">Vita Classic Product</h1>

        <p className="font-Mantressat text-sm md:text-base font-bold leading-relaxed max-w-sm">We Know How Large Objects Will Act, We Know How Are Objects Will Act, We Know</p>

        <div className="flex items-center gap-6">

          <h3 className="font-Montressat text-2xl font-extrabold ">$16.48</h3>

          <button className="bg-[#2DC071] hover:bg-[#24985b] text-white px-6 py-3 rounded-md text-sm font-extrabold">Add To Cart</button>
        </div>
      </div>

          <div className="flex-1 hidden md:block">

            <img 
            src="/images/product.png" 
            alt="Product" 
            className='w-[443px] h-[685px] object-contain'/>
          </div>
      </div>
    </div>
  )
}

export default Producthero
