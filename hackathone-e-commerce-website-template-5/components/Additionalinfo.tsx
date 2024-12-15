import React from 'react'
import Footer from '../components/Footer' 

const Additionalinfo = () => {

const products = [

    {
        id: 1,
        image: "/images/pro.jpg",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 2,
        image: "/images/pro1.png",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 3,
        image: "/images/pro2.png",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 4,
        image: "/images/pro1.png",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 5,
        image: "/images/pro2.png",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 6,
        image: "/images/pro.jpg",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 7,
        image: "/images/pro1.png",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },

    {
        id: 8,
        image: "/images/pro.jpg",
        title: "Graphic Design",
        department: "English Department",
        price: "$16.48",
        discountedPrice: "$6.48",
    },
];

  return (
    
    <div className='px-4 sm:px-6 my-16 lg:px-8'>

        <div className="border-b bg-gray-200 mb-8">

            <ul className="flex text-gray-500 text-sm text-center font-medium space-x-4">

                <li className='cursor-pointer hover:text-blue-500 font-bold'>Description</li>
                <li className='cursor-pointer hover:text-blue-500 font-bold'>Additional Information</li>
                <li className='cursor-pointer hover:text-blue-500 font-bold'>Reviews (0)</li>

            </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="col-span-1">

                <img 
                src="/images/pro2.png" 
                alt="Product" 
                className="w-full h-auto rounded-lg object-cover shadow" />

            </div>

            <div className="col-span1 lg:col-span-1">

                <h2 className="text-xl font-extrabold text-gray-800 mb-4">The Quick fox jump over</h2>
                <p className="text-sm text-gray-600 mb-4 font-bold"> Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent.Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met.</p>
                <p className="text-sm text-gray-600 mb-4 font-bold"> Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent.Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met.</p>
                <p className="text-sm text-gray-600 mb-4 font-bold"> Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent.Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met.</p>
            </div>

            <div className="col-span-1 lg:col-span-1">

                <h2 className="text-xl font-semibold text-gray-800 mb-4">The Quick Fox Jump From</h2>

                <ul className="space-y-3 text-sm text-gray-600 font-bold">
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">›</span> The Quick Fox Jump From The Lazy Dog</li>
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">›</span> The Quick Fox Jump From The Lazy Dog</li>
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">›</span> The Quick Fox Jump From The Lazy Dog</li>
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">›</span> The Quick Fox Jump From The Lazy Dog</li>
                    <li className="flex items-center">
                        <span className="text-blue-500 mr-2">›</span> The Quick Fox Jump From The Lazy Dog</li>
                </ul>
            </div>
        </div>

        <div className="bg-white my-8 px-4 sm:px-8">
            
            <div className="max-w-[1440px] mx-auto">

                <h2 className="text-2xl font-extrabold text-gray-800 mb-6">BestSeller Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {products.map((product) => (

                        <div 
                        key={product.id}
                        className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300" >

                <div className="w-full h-56 overflow-hidden rounded-t-lg">

                    <img 
                    src={product.image} 
                    alt={product.title}
                    className='w-full h-full object-cover' />

                </div>

                <div className="p-4">

                    <h3 className="text-lg font-extrabold text-gray-800">{product.title}</h3>
                    <p className="text-sm text-gray-500">{product.department}</p>

                    <div className="mt-2 flex items-center space-x-2">

                        <span className="text-sm text-gray-500 line-through">{product.price}</span>
                        <span className="text-sm text-green-500 font-extrabold">{product.discountedPrice}</span>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

            <div className="bg-gray-50 mt-12">

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8">

                    {["icon1","icon2","icon3","icon4","icon5",].map((icon, index) => (

                    <img 
                    key={index}
                    src={`/images/${icon}.png`}
                    alt={icon} 
                    className='w-20 h-20 object-contain'/>
                    
                    ))}
                </div>
            </div>

      <Footer />

    </div>
  )
}

export default Additionalinfo
