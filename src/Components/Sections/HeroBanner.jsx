// ==============================
// HeroSection.jsx
// ==============================

import React from "react";
import startIcon from '../../assets/star.png'
const HeroBanner = () => {
    const stats = [
        {
            icon: startIcon,
            text: "Over 400+ Authors Trust Us Worldwide"
        },
        {
            icon: startIcon,
            text: "96% Client Retention Rate"
        },
        {
            icon: startIcon,
            text: "2,500+ Skilled Writers and Editors"
        },
        {
            icon: startIcon,
            text: " 100% Satisfaction Guarantee"
        },
    ]
    return (
        <section
            className="main-container relative min-h-screen bg-cover bg-center flex items-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto w-full py-28 md:pt-28 pb-20">

                <div className="flex flex-col md:flex-row gap-5 items-center">

                    {/* Left Content */}
                    <div className="text-center w-[100%] lg:text-left md:w-[70%]">

                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-[#CDC72A]">
                            Transform Your Manuscript into a Published Masterpiece Today!
                        </h1>

                        <p className="text-[#FFFFFF]/80 mt-6 text-base md:text-[22px] leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Bring your book to life by partnering with our expert team.
                            From professional ghostwriters and editors to designers and
                            publishing consultants, we ensure your book reaches its full
                            potential.
                        </p>
                    </div>

                    {/* Right Form */}
                    <div className="flex justify-center lg:justify-end">

                        <div className="w-full max-w-2xl bg-white/10 border border-[1px] border-[#CDC72A]/40 backdrop-blur-md rounded-md p-5 sm:p-7 shadow-[0_0_40px_rgba(255,215,0,0.08)]">

                            <h3 className="text-[#CDC72A] text-2xl sm:text-3xl font-bold leading-snug">
                                Let’s Level Up Your
                                <br />
                                <span className="text-white">Brand Together</span>
                            </h3>

                            <form className="mt-6 space-y-4">

                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full h-11 sm:h-12 bg-white rounded-md px-4 text-black outline-none border border-transparent focus:border-yellow-400"
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-11 sm:h-12 bg-white rounded-md px-4 text-black outline-none border border-transparent focus:border-[#CDC72A]"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full h-11 sm:h-12 bg-white rounded-md px-4 text-black outline-none border border-transparent focus:border-[#CDC72A]"
                                />

                                <textarea
                                    rows="4"
                                    placeholder="Your message"
                                    className="w-full bg-white rounded-md p-4 text-black outline-none resize-none border border-transparent focus:border-[#CDC72A]"
                                />

                                <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">
                                    By providing a telephone number and submitting this form,
                                    you consent to being contacted via SMS text message.
                                </p>

                                <button
                                    type="submit"
                                    className="w-full h-11 sm:h-12 text-white cursor-pointer shadow-md bg-[#CDC72A] font-semibold rounded-md transition duration-300 hover:text-[#CDC72A] hover:bg-transparent hover:border-[1px] hover:shadow-[#CDC72A]"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 content-between md:gap-x-28 gap-y-7 md:gap-y-5 mt-10">
                    {stats.map((data,index) => (
                        <div key={index} className="flex items-start sm:items-center gap-3 md:justify-center lg:justify-start">
                            <img src={data.icon} className="text-[#CDC72A] text-base md:text-lg"/>
                            <p className="text-[#CDC72A] text-base md:text-2xl">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;