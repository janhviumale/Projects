import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import GardenSection from '../components/GardenSection'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <GardenSection />
      <WhyChooseUs />
      <Testimonials />  
      <Footer /> 
    </div>
  )
}

export default Home
