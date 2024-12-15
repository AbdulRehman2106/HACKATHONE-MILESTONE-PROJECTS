'use client'

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contactus = () => {

  

    return (

        <>

            <Navbar />

            <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mx-auto container">

                <div className="max-w-[1440px] mx-auto container  flex items-center justify-center gap-9 ">
                    
                    <div className=" space-y-6 font-extrabold">

                        <h4 className=" text-sm font-extrabold text-gray-500">Contact Us</h4>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Get In Touch Today!</h2>
                        <p className="text-gray-600 font-extrabold">We Know How Large Objects Will Act, <br /> But Things On A Small Scale.</p>

                        <div>

                            <p className="text-gray-800 font-extrabold">
                                Phone: <span className="text-black">+451 215 215</span></p>

                            <p className="text-gray-800 font-extrabold">
                                Fax: <span className="text-black">+451 215 215</span></p>

                        </div>
                        
                        <div className="mt-6 flex space-x-4">

                            <img
                                src="/about/Icon-Twitter2.png"
                                className=" bg-blue-700 w-6 h-6 hover:cursor-pointer"  >
                            </img>

                            <img
                                src="/about/Icon-Facebook.png"
                                className=" bg-blue-700 w-6 h-6 hover:cursor-pointer">
                            </img>

                            <img
                                src="/about/insta2.png"
                                className=" bg-blue-700 w-6 h-6 hover:cursor-pointer"  >
                            </img>
                        </div>
                    </div>


                    <div className="relative w-1/2 h-[400px]">

                        <img
                            src="/images/contact.png"
                            alt="Family Shopping"
                            className="object-contain  h-full w-full "/>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">

                <div className="max-w-[1440px] mx-auto text-center space-y-12">

                    <div>

                        <h4 className="uppercase text-sm text-blue-500 font-extrabold mb-2">Visit Our Office</h4>

                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 ">We Help Small Businesses <br /> With Big Ideas</h2>
                    </div>


                    <div className="grid grid-cols-1  md:grid-cols-3 gap-8">

                        <div className="flex flex-col space-y-5 items-center bg-white shadow-lg rounded-lg p-6 border border-gray-200">

                            <div className="w-12 h-12 flex items-center justify-center mb-4">

                                <img
                                    src="/images/icon.png"
                                    className=" w-10 h-10"    />
                                

                            </div>

                            <p className="text-sm text-gray-600 font-extrabold">georgia.young@example.com <br />georgia.young@ple.com</p>

                            <h3 className="text-lg font-extrabold text-gray-800">Get Support</h3>

                            <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition font-extrabold">Submit Request</button>
                        </div>

                        <div className="flex flex-col space-y-5 items-center bg-[#252B42] text-white shadow-lg rounded-lg p-6">

                            <div className="w-12 h-12 flex items-center justify-center mb-4">

                                <img
                                    src="/images/icon.png"
                                    className=" w-10 h-10"                        >
                                </img>
                            </div>

                            <p className="text-sm font-extrabold">georgia.young@example.com <br />georgia.young@ple.com</p>

                            <h3 className="text-lg font-extrabold">Get Support</h3>

                            <button className="mt-4 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition font-extrabold">Submit Request</button>
                        </div>

                        <div className="flex flex-col items-center space-y-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200">

                            <div className="w-12 h-12 flex items-center justify-center mb-4">

                                <img
                                    src="/images/icon.png"
                                    className=" w-10 h-10"                        >
                                </img>
                            </div>

                            <p className="text-sm text-gray-600 font-extrabold">georgia.young@example.com <br />georgia.young@ple.com</p>

                            <h3 className="text-lg font-extrabold text-gray-800">Get Support</h3>

                            <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition font-extrabold">Submit Request</button>
                        </div>
                    </div>


                    <div className="bg-white py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6">

                        <div className="text-center">
                            
                            <div className="text-blue-500 mb-4">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 mx-auto animate-bounce">

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 19V6m-7 7l7-7 7 7"/>
                                </svg>
                            </div>

                            <h4 className="text-gray-600 text-sm font-extrabold tracking-wide">WE CAN NOT WAIT TO MEET YOU</h4>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">Let’s Talk</h1>

                        <button className="px-8 py-3 bg-blue-500 text-white text-lg font-extrabold rounded-lg shadow-md hover:bg-blue-600 transition">Try It Free Now</button>
                    </div>
                </div>
            </section>
           <Footer/>

        </>

    );
};

export default Contactus;