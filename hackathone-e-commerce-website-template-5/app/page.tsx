import Bestsellerproduct from '@/components/Bestsellerproduct'
import Editorspick from '@/components/Editorspick'
import Featuredpost from '@/components/Featuredpost'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Neuraluniverse from '@/components/Neuraluniverse'
import Producthero from '@/components/Producthero'
import Topheader from '@/components/Topheader'
import React from 'react'

export default function Home() {
  
  return (

    <div>
      
      <Topheader />

      <Hero />

      <Editorspick />

      <Bestsellerproduct />

      <Producthero />

      <Neuraluniverse />

      <Featuredpost />

      <Footer />

    </div>
  )
}
