import React from 'react'
import { useParams } from 'react-router'
import { ServicesData } from '../../Pages/ServicesData';
const SingleServiceContent = () => {
    const { id } = useParams();
    const activeService = ServicesData.find(
        service => service.id === id
    )
    return (
        <section className="section-main">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">

                {/* Left Side: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={activeService.imge}
                        alt="Books hanging on a wall"
                        className="rounded-2xl w-full h-[400px] md:h-[700px] object-cover shadow-lg"
                    />
                </div>
                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 flex flex-col space-y-2">
                    <h1 className="text-3xl text-center md:text-left md:text-4xl font-bold text-gray-900 leading-tight">
                        {activeService.title}
                    </h1>
                    <p className="text-gray-600 leading-relaxed text-center text-sm md:text-lg md:text-left">
                        {activeService.descr}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleServiceContent