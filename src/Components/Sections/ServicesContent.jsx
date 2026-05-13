import React from 'react'
import TitleInfo from './TitleInfo'
import Tabs from './Tabs'

const ServicesContent = () => {
    return (
        <section className='section-main'>
            <TitleInfo title="Crafting Ideas into Bestsellers." desc="Your laboratory instruments should serve you, not the other way around. We're happy to help you" />
            <Tabs />
        </section>
    )
}

export default ServicesContent