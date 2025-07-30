import React from 'react'
import MobileSlider from '../component/MobileSlider'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import Footer from '../component/Footer'


function Home() {
  return (
    <div className='bg-[#96969635] h-[100vh] w-[100vw]'>
    <MobileSlider/>
    <Product/>
    <OurPolicy/>
    <Footer/>
    </div>
  )
}

export default Home             