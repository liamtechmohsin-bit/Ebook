import React from 'react'
import ContactSection from '../Components/Sections/ContactSection'
import AboutContent from '../Components/Sections/AboutContent'
import StatsBar from '../Components/Sections/StatsBar'
import Ctasection from '../Components/Sections/Ctasection'
import Publishbook from '../Components/Sections/Publishbook'
import Testimonial from '../Components/Sections/Testimonial'
import ServicesContent from '../Components/Sections/ServicesContent'

const Home = () => {
  return (
    <div className='main-container'>
      <AboutContent />
      <StatsBar />
      <ServicesContent />
      <Ctasection />
      <div className='w-full'>
        <Publishbook />
      </div>
      <Testimonial />
      <ContactSection />
    </div>
  )
}

export default Home