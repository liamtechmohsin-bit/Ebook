import React from 'react';
import Button from '../Common/Button';

const Ctasection = () => {
    return (
        <section className="section-main">
            {/* Main Container with Background Image */}
            <div
                className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl"
                style={{
                    // image_1d2416.jpg ko yahan replace karein
                    backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000')`,
                    minHeight: '400px'
                }}
            >
                {/* Dark Overlay - Text ko highlight karne ke liye */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content Area */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-14 md:py-20 text-center text-white">

                    {/* Main Heading */}
                    <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
                        Let's Get In Touch.
                    </h2>

                    {/* Subtext */}
                    <p className="mb-8 max-w-2xl text-base text-gray-200 md:text-[22px] leading-relaxed">
                        Your laboratory instruments should serve you, not the other
                        way around. We're happy to help you.
                    </p>

                    {/* Yellow Action Button */}
                    <div className="pt-4 flex justify-center">
                        <Button />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ctasection;