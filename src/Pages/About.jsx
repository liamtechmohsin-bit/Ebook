import React from 'react'
import AboutContent from '../Components/Sections/AboutContent'
import StatsBar from '../Components/Sections/StatsBar'
import ServicesContent from '../Components/Sections/ServicesContent'
import Ctasection from '../Components/Sections/Ctasection'
import Publishbook from '../Components/Sections/Publishbook'
import Testimonial from '../Components/Sections/Testimonial'
import ContactSection from '../Components/Sections/ContactSection'

const About = () => {
  return (
    <div className='main-container'>
      <StatsBar />
      <AboutContent hidden={true} title="Self Publishing Children's Books Made Simple" descr="Bring your book to life by partnering with our expert team. From
            professional ghostwriters and editors to designers and publishing
            consultants, we ensure your book reaches its full potential. Bring
            your book to life by partnering with our expert team.Bring your book to life by partnering with our expert team. From
            professional ghostwriters and editors to designers and publishing
            consultants, we ensure your book reaches its full potential. Bring
            your book to life by partnering with our expert team. Bring your book to life by partnering with our expert team. From
            professional ghostwriters and editors to designers and publishing
            consultants, we ensure your book reaches its full potential. Bring
            your book to life by partnering with our expert team.Bring your book to life by partnering with our expert team. From
            professional ghostwriters and editors to designers and publishing
            consultants, we ensure your book reaches its full potential. Bring
            your book to life by partnering with our expert team."/>
      <Ctasection />
      <div className='w-full'>
        <Publishbook />
      </div>
      <Testimonial />
      <ContactSection />
    </div>
  )
}

export default About