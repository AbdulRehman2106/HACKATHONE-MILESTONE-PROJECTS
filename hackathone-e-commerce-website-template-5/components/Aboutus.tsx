'use client'
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {

  const teamMembers = [

    {
      id: 1,
      image: "/images/img1.jpeg",
      name: "Username",
      profession: "Profession",
      socials: ["facebook", "instagram", "twitter"],
    },

    {
      id: 2,
      image: "/images/img2.jpeg",
      name: "Username",
      profession: "Profession",
      socials: ["facebook", "instagram", "twitter"],
    },

    {
      id: 3,
      image: "/images/img3.jpeg",
      name: "Username",
      profession: "Profession",
      socials: ["facebook", "instagram", "twitter"],
    },
  ];

  

  return (

    <>

      <Navbar />


      <div className="py-12 sm:px-6">

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8">
            
          <div className="space-y-6 text-center lg:text-left">

            <h4 className="text-sm text-gray-500 font-extrabold">About Company</h4>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Us</h1>
            <p className="text-gray-600 font-extrabold">We Know How Large Objects Will Act, <br /> But Things On A Small Scale.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition font-extrabold">Get Quote Now</button>
          </div>

          <div className="flex justify-center items-center">

            <img
              src="/images/about.png"
              alt="About Us"
              className="w-full max-w-[500px] h-auto object-cover"
            />
          </div>
        </div>

        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">

          <div className="max-w-[1440px] mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <h2 className="text-xl text-gray-900 font-extrabold">Problems Trying</h2>
              <p className="text-gray-600 font-extrabold">Problems Trying To Resolve The Conflict Between The Two Major Realms Of Classical Physics: Newtonian Mechanics.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center font-extrabold">

              <div>
                
                <h3 className="text-2xl font-extrabold text-gray-900">15K</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>

              </div>
              <div>

                <h3 className="text-2xl font-extrabold text-gray-900">150K</h3>
                <p className="text-sm text-gray-600">Monthly Visitors</p>

              </div>
              <div>

                <h3 className="text-2xl font-extrabold text-gray-900">15</h3>
                <p className="text-sm text-gray-600">Countries Worldwide</p>

              </div>
              <div>

                <h3 className="text-2xl font-extrabold text-gray-900">100+</h3>

                <p className="text-sm text-gray-600">Top Partners</p>

              </div>
            </div>

            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                
              <img
              
                src="/images/vid.png"
                alt="Video Thumbnail"
                className="w-[72] h-full object-cover mx-auto"/>

            </div>
          </div>
        </div>

        <div className="bg-white py-3 px-4 sm:px-6 lg:px-8">
          <div className="font-extrabold max-w-[1440px] mx-auto text-center">

            <h2 className="text-3xl font-extrabold text-gray-800 ">Meet Our Team</h2>
            <p className="text-gray-600 text-sm mt-2 font-extrabold">Problems Trying To Resolve The Conflict Between The Two Major Realms Of Classical Physics: Newtonian Mechanics.</p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {teamMembers.map((member) => (

                <div
                  key={member.id}
                  className="text-center flex flex-col items-center">

                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"/>
                  </div>

                  <h3 className="text-lg ffont-extrabold text-gray-800 ">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-extrabold">{member.profession}</p>

                  <div className="flex gap-4 mt-4">

                    {member.socials.map((social, index) => (
                      <a
                        key={index}
                        href={`https://${social}.com`}
                        target="_blank"
                        rel="noopener noreferrer">

                        {social === "facebook" && (
                          <img
                            src="/about/Icon-Facebook.png"
                            alt="Facebook"
                            className="w-5 h-5 bg-blue-900"/>
                        )}
                        {social === "instagram" && (
                          <img
                            src="/about/insta2.png"
                            alt="Instagram"
                            className="w-5 h-5 bg-blue-900"/>
                        )}
                        {social === "twitter" && (
                          <img
                            src="/about/Icon-Twitter2.png"
                            alt="Twitter"
                            className="w-5 h-5 bg-blue-900"/>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>

          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto text-center font-extrabold">
                
              <h2 className="text-2xl font-extrabold text-gray-800">Big Companies Are Here</h2>
              <p className="text-gray-600 text-sm mt-2 font-extrabold">Problems Trying To Resolve The Conflict Between The Two Major Realms Of Classical Physics: Newtonian Mechanics.</p>

              <div className="bg-gray-50 py-8 mt-12">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8">

                  {["icon1", "icon2", "icon3", "icon4", "icon5"].map((icon, index) => (

                    <img
                      key={index}
                      src={`/images/${icon}.png`}
                      alt={icon}
                      className="w-20 h-20 object-contain"/>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-500 text-white p-8 rounded-lg flex-1 h-full font-extrabold">

              <h4 className="text-sm font-medium uppercase mb-2">Work With Us</h4>
              <h2 className="text-3xl font-extrabold mb-4">Now Let’s grow Yours</h2>
              <p className="text-sm text-blue-200 mb-6">The Gradual Accumulation Of Information About Atomic And Small-Scale Behavior During The First Quarter Of The 20th Century.</p>
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition">Button</button>
            </div>

            <div className="flex-1">

              <img
                src="/images/img3.jpeg"
                alt="Company"
                className="w-full h-[560px] rounded-lg object-cover"/>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;