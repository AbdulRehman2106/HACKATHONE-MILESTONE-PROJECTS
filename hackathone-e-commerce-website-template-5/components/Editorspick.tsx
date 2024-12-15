import React from 'react'

const Editorspick = () => {

  return (

    <div className='w-full flex justify-center py-10 bg-[#f5f5f5]'>

        <div className="max-w-[1200px] w-full flex flex-col gap-8 bg-[#FAFAFA] p-6 md:p-10 rounded-md">

            <div className="flex flex-col items-center gap-4">

            <h3 className="font-Montserrat font-extrabold text-xl md:text-2xl">EDITOR’S PICK</h3>
            <p className="text-sm md:text-base text-[#737373] text-center font-bold">Problems Trying To Resolve The Conflict Between</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="relative w-full h-[400px]">

                <img 
                src="/images/men.jpeg" 
                alt="Men"
                className='w-full h-full object-cover rounded-md' />

                <button className="absolute bottom-4 left-1/2 traslate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserret font-extrabold text-sm text-[#252842] hover:bg-gray-100">Men</button>
            </div>
            
            <div className="relative w-full h-[400px]">

            <img
              src="/images/women.jpg"
              alt="Women"
              className="w-full h-full object-cover rounded-md"/>

            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-sm text-[#252B42] hover:bg-gray-100">WOMEN</button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            
            <div className="relative w-full h-[200px] md:h-[240px]">
                
              <img
                src="/images/women2.jpg"
                alt="Accessories"
                className="w-full h-full object-cover rounded-md"/>
                
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-sm text-[#252B42] hover:bg-gray-100">ACCESSORIES</button>
            </div>

            <div className="relative w-full h-[200px] md:h-[240px]">
                
              <img
                src="/images/kids.jpg"
                alt="Kids"
                className="w-full h-full object-cover rounded-md"/>

              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-sm text-[#252B42] hover:bg-gray-100">KIDS</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Editorspick
