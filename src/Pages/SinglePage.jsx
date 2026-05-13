import React from 'react'
import StatsBar from '../Components/Sections/StatsBar'
import Ctasection from '../Components/Sections/Ctasection'
import BookSlider from '../Components/Sections/BookSlider'
import Testimonial from '../Components/Sections/Testimonial'
import ContactSection from '../Components/Sections/ContactSection'
import SingleServiceContent from '../Components/Sections/SingleServiceContent'

const SinglePage = () => {
    return (
        <div className='main-container'>
            <StatsBar />
            <SingleServiceContent />
            <Ctasection />
            <BookSlider />
            <Testimonial />
            <ContactSection />
        </div>
    )
}

export default SinglePage