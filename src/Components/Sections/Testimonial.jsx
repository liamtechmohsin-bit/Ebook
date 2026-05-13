import React from 'react'
import TitleInfo from './TitleInfo'
import Slider from './Slider'

const Testimonial = () => {
    return (
        <section className='section-main'>
            <div className='relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-black py-10'>
                <div className='section-header'>
                    <h1 className='section-title text-white'>Join the Ranks of Satisfied Clients.</h1>
                    <p className='section-desc text-white/70'>With customized feedback and attentive customer service, we help your publishing dreams come to fruition.</p>
                </div>
                <div className='pt-5'>
                    <Slider />
                </div>
            </div>

        </section>
    )
}

export default Testimonial