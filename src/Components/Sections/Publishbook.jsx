import React from 'react'
import TitleInfo from './TitleInfo'
import BookSlider from './BookSlider'

const Publishbook = () => {
    return (
        <div className='section-main'>
            <TitleInfo title="Published by Hutchinson Publishers" desc="Bring your book to life by partnering with our expert team." />
            <BookSlider />
        </div>
    )
}
export default Publishbook