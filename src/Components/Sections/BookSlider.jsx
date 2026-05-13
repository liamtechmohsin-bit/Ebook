import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper styles zaroori hain
import 'swiper/css';

// Assets (Aapke imports sahi hain)
import book1 from '../../assets/book1.png';
import book2 from '../../assets/book2.png';
import book3 from '../../assets/book3.png';
import book4 from '../../assets/book4.png';
import book5 from '../../assets/book5.png';

const BookSlider = () => {
    const bookCovers1 = [book1, book2, book3, book4, book5, book1, book2, book3, book4, book5];
    const bookCovers2 = [book5, book4, book3, book2, book1, book5, book4, book3, book2, book1];

    // Common Swiper Settings taaki code repeat na ho
    const commonSettings = {
        modules: [Autoplay],
        spaceBetween: 15,
        slidesPerView: 2,
        loop: true,
        speed: 5000, // Speed 5000ms matlab smooth slow motion
        allowTouchMove: false, // User drag na kar sake taaki smooth chale
        breakpoints: {
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
        }
    };

    return (
        <div className="relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-white py-10">
            {/* Pehla Slider: Right to Left (Default) */}
            <Swiper
                {...commonSettings}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                className="book-swiper-ltr mb-6 mb-4 !ease-linear"
                style={{ transitionTimingFunction: 'linear' }}
            >
                {bookCovers1.map((src, index) => (
                    <SwiperSlide key={`top-${index}`}>
                        <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100">
                            <img src={src} alt="book" className="w-full h-auto object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Doosra Slider: Left to Right (Reverse) */}
            <Swiper
                {...commonSettings}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true, // Yeh hai asli magic property
                }}
                className="book-swiper-rtl !ease-linear"
                style={{ transitionTimingFunction: 'linear' }}
            >
                {bookCovers2.map((src, index) => (
                    <SwiperSlide key={`bottom-${index}`}>
                        <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100">
                            <img src={src} alt="book" className="w-full h-auto object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom CSS for perfectly smooth linear motion */}
            <style dangerouslySetInnerHTML={{ __html: `
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}} />
        </div>
    );
};

export default BookSlider;