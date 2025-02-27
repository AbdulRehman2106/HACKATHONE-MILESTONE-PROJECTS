"use client"

import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Pricingsection = () => {

const pricingPlans = [

  {
    title:"FREE",
    price:"0",
    button1: "Try To Free",
    description: "Organize Accross All Apply By Hand",
    features:["Unlimited Product Updates"],
    bgColor:"bg-white",
    textColor:"text-gray-900",
    border:"border-blue-300"
  },
  
  {
    title:"STANDARD",
    price:"9.99",
    button1: "Try To Free",
    description: "Organize Accross All Apply By Hand",
    features:["Unlimited Product Updates","Unlimimted Product Updates",],
    bgColor:"bg-[#252B42]",
    textColor:"text-white",
    isHighlighted:true,
  },

  {
    title:"PREMIUM",
    price:"19.99",
    button1: "Try To Free",
    description: "Organize Accross All Apply By Hand",
    features:["Unlimited Product Updates"],
    bgColor:"bg-white",
    textColor:"text-gray-900",
    border:"border-blue-300"
  },
]

const faqs = [

  {
    question:"The Quick Fox Jumps Over The Lazy Dog",
    answer:"Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent. Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met."
  },

  {
    question:"The Quick Fox Jumps Over The Lazy Dog",
    answer:"Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent. Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met."
  },

  {
    question:"The Quick Fox Jumps Over The Lazy Dog",
    answer:"Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent. Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met."
  },

  {
    question:"The Quick Fox Jumps Over The Lazy Dog",
    answer:"Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent. Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met."
  },

  {
    question:"The Quick Fox Jumps Over The Lazy Dog",
    answer:"Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent. Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met."
  },

  {
    question:"The Quick Fox Jumps Over The Lazy Dog",
    answer:"Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent. Relit Official Consequent Door Enim Relit Mollie. Excitation Venial Consequent Sent Nostrum Met."
  },
]




  return (

    <>
    
    <Navbar />
    
      <div className="bg-white">

        <div className="text-center py-12 px-4 sm:px-6 lg:px-8">

          <h4 className="text-sm font-extrabold text-gray-500">Pricing</h4>

          <h1 className="text-4xl font-extrabold text-gray-900 mt-5">Simple Pricing</h1>

          <nav className="flex justify-center mt-7 text-sm text-gray-500" >

                <span className='font-extrabold'>Home</span>
                <span className='mx-2 font-extrabold'>{`>`}</span>
                <span className='font-extrabold'>Pricing</span>
          </nav>
        </div>

        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

              <div className="max-w-[1440px] mx-auto text-center">

                <h2 className="text-2xl font-extrabold text-gray-900">Pricing</h2>

                <p className="text-sm text-gray-600 mt-2 font-bold">Problems Trying To Resolve The Conflict Between <br /> The Two Major Realms Of Classical Physics. Newtonain Mechanics</p>

                <div className="flex justify-center items-center mt-8 gap-4">

                            <span className="text-gray-700 font-extrabold">Monthly</span>

                            <label className="relative inline-flex items-center cursor-pointer">

                                <input
                                    type="checkbox"
                                    className="sr-only peer"/>

                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500"></div>

                                <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></span>

                            </label>

                            <span className="text-gray-700 font-extrabold">Yearly</span>

                            <button className="ml-4 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-extrabold hover:bg-blue-200">Save 25%</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

              <div className="max-w-[1440px] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {pricingPlans.map((plan, index) => (

                    <div key={index} className={`p-6 rounded-lg shadow-md ${plan.isHighlighted ? "transform scale-105 border-blue-500" : plan.border || "border-gray-200"} ${plan.bgColor} ${plan.textColor} border`}>

                      <h3 className="text-xl font-extrabold">{plan.title}</h3>

                      <p className="mt-2 text-sm font-bold">{plan.description}</p>

                      <div className="mt-6 text-4xl font-extrabold">

                        {plan.price} <span className="text-lg font-extrabold">$</span>{""}

                        <span className="text-sm font-extrabold ">Per Month</span>
                      </div>

                      <ul className="mt-4 space-y-2">

                        {plan.features.map((feature, i) => (

                          <li key={i} className="flex items-center gap-2">

                            <span className={`w-5 h-5 flex items-center justify-center rounded-full ${feature.includes("Unlimited")? "bg-green-500 text-white": "bg-green-500 text-white"}`}>✓</span>

                                <span>{feature}</span>
                                  </li>
                                  ))}
                                </ul>

                  <div className="mt-6 text-center">

                    <button className="px-6 py-3 bg-blue-500 text-white text-sm font-extrabold rounded-lg shadow-md hover:bg-blue-600 transition">Try For Free</button>
                  </div>
             </div>
        ) )}
        </div>

              
        <div className="bg-gray-50 py-8 mt-12">

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8">

                            {["icon1", "icon2", "icon3", "icon4", "icon5"].map((icon, index) => (

                                <img
                                    key={index}
                                    src={`/images/${icon}.png`}
                                    alt={icon}
                                    className="w-20 h-20 object-contain" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">

                <div className="max-w-[1440px] mx-auto text-center">

                    <h2 className="text-3xl font-extrabold text-gray-900">Pricing FAQs</h2>

                    <p className="mt-2 text-sm text-gray-500 font-bold">Problems Trying To Resolve The Conflict Between The Two Major Realmsof Classical Physics
                    </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            {faqs.map((faq, index) => (

              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow flex flex-col gap-2">

                <div className="flex items-start gap-2">

                  <span className="text-blue-500 text-lg font-extrabold">›</span>

                  <h3 className="text-lg font-extrabold text-gray-900">{faq.question}</h3>
                </div>

                  <p className="text-sm text-gray-500 font-bold italic">{faq.answer}</p>
              </div>
            ))}
          </div>

            <div className="text-center mt-12">

              <p className="text-sm text-gray-500 font-extrabold">Haven’t Got Your Answer?{""}

              <a href="#" className="text-blue-500 font-extrabold hover:underline"> Contact Our Support</a>
              </p>
            </div>
        </div>

      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">

        <div className="max-w-[1440px] mx-auto">

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Start Your 14 Days Free Trial</h2>

          <p className="mt-4 text-sm text-gray-500">Met Minim Mollie Non Desert Alamo Est Sit Cliquey Dolor Do Met Sent.Relit Official Consequent.</p>

          <div className="mt-6">

            <button className="px-6 py-3 bg-blue-500 text-white font-extrabold rounded-lg shadow-md hover:bg-blue-600 transition">Try It Free Now</button>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            
                        <img
                            src="/about/Icon-Twitter2.png"
                            className=" bg-blue-700 w-6 h-6 cursor-pointer"></img>
                            
                        <img
                            src="/about/Icon-Facebook.png"
                            className=" bg-blue-700 w-6 h-6 cursor-pointer" ></img>

                        <img
                            src="/about/insta2.png"
                            className=" bg-blue-700 w-6 h-6 cursor-pointer"></img>
                    </div>
              </div>
          </div>

            <Footer />

    </>

      )
}

export default Pricingsection
