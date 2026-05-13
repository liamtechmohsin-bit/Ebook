import React from 'react'
import { useState } from 'react'
import { ServicesData } from '../../Pages/ServicesData'
import { useNavigate } from 'react-router';
import Button from '../Common/Button';
const Tabs = () => {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState("publishing-services")
    const checkActiveclass = (id) => {
        setIsActive(id)
    }
    const tabcontent = [
        { id: "publishing-services", name: "Publishing Services" },
        { id: "ghostwriting", name: "Ghostwriting" },
        { id: "book-cover-design", name: "Book Cover Design" },
        { id: "formatting-&-proofreading", name: "Formatting & Proofreading" },
        { id: "author-website-design", name: "Author Website Design" },
        { id: "book-editing", name: "Book Editing" },
        { id: "book-publishing", name: "Book Publishing" },
        { id: "book-trailer", name: "Book Trailer" }
    ]
    const activeService = ServicesData.find(
        (data) => data.id === isActive
    )
    return (
        <div className='flex flex-col gap-14 pt-10'>
            <div className='flex flex-col md:flex-row flex-wrap gap-10 px-10 w-full bg-linear-to-b from-[#1D2D2A] to-[#000000] text-white rounded-xl shadow-lg border border-neutral-800 overflow-hidden py-10 justify-center'>
                {tabcontent.map(data => (
                    <button className={`px-5 py-3 rounded-md text-base cursor-pointer shadow-md ${isActive === data.id ? "bg-[#CDC72A] text-white shadow-[#ffff]/40" : "text-[#CDC72A] bg-transparent border-[1px] border-[#CDC72A]"}`} onClick={() => checkActiveclass(data.id)}>{data.name}</button>
                ))}
            </div>
            {activeService && (
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">

                    {/* Left Side: Image */}
                    <div div div className="w-full md:w-1/2" >
                        <img
                            src={activeService.imge}
                            alt="Books hanging on a wall"
                            className="rounded-2xl w-full h-[200px] md:h-[400px] object-cover shadow-lg"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div div className="w-full md:w-1/2 flex flex-col space-y-2" >
                        <h1 className="text-3xl text-center md:text-left md:text-4xl font-bold text-gray-900 leading-tight">
                            {activeService.title}
                        </h1>

                        <p className="text-gray-600 leading-relaxed text-center text-sm md:text-lg md:text-left">
                            {activeService.descr}
                        </p>

                        <div className="pt-4 flex justify-center md:justify-start">
                            <Button text="Learn more" onClick={() => navigate(`/services/${activeService.id}`)} />
                        </div>
                    </div>

                </div>
            )}

        </div >
    )
}

export default Tabs