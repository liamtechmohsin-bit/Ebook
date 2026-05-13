import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosStar } from "react-icons/io";
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import img from '../../assets/testimonialimg.webp'
import { FiArrowLeft } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Slider = () => {
    const testimonial = [
        {
            name: "MOHSIN",
            title: "Review for William Parker",
            descr: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
            image: img
        },
        {
            name: "MOHSIN",
            title: "Review for William Parker",
            descr: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
            image: img
        },
        {
            name: "MOHSIN",
            title: "Review for William Parker",
            descr: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
            image: img
        },
        {
            name: "MOHSIN",
            title: "Review for William Parker",
            descr: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
            image: img
        }
    ]
    return (
        <div className='px-4 md:px-24 pb-5'>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={3}
                spaceBetween={10}
                pagination={false}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper"
            >
                {testimonial.map(data => (
                    <SwiperSlide className='mb-10 mt-14'>
                        <div className='bg-white/10 backdrop-blur-md border-[1px] border-white/50 rounded-md p-5 shadow-lg shadow-amber-300/30'>
                            <div className='w-[100px] bg-white rounded-full h-[100px] -mt-[70px]'>
                                <img src={data.image} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className="mt-1 pl-2">
                                <span className="font-semibold border-b-2 border-[#CA9352] text-white text-2xl">
                                    {data.name}
                                </span>
                                <p className="text-xs text-gray-300 mt-1">{data.role}</p>
                                <div className="text-yellow-400 mt-2 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <IoIosStar key={i} />
                                    ))}
                                </div>
                                <div className='pt-8'>
                                    <h1 className='text-white text-xl pb-2'>{data.title}</h1>
                                    <p className='text-white/80'>{data.descr}</p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center gap-4">
                <button className="custom-prev cursor-pointer w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border-[1px] border-[#CDC72A] shadow-lg flex items-center justify-center hover:shadow-amber-200/45 duration-300 ease-in">
                    <MdKeyboardArrowLeft className='text-[#CDC72A]' />
                </button>
                <button className="custom-next cursor-pointer w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border-[1px] border-[#CDC72A] shadow-lg flex items-center justify-center hover:shadow-amber-200/45 duration-300 ease-in">
                    <MdKeyboardArrowRight className='text-[#CDC72A]' />
                </button>
            </div>
        </div>
    );
}
export default Slider