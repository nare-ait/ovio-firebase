import React, { useState } from 'react';

export default function Slider({ slides, texts }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="overflow-hidden w-[1900px] h-[850px] top-[130px] absolute left-0 bg-purple">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <div className="min-w-full flex" key={index}>
                        <div className="overflow-hidden ml-[600px] relative w-[1400px] h-[850px]">
                            <img
                                src={s}
                                alt=""
                                className="w-full h-full object-cover rounded-l-full rounded-tl-[1800px] rounded-bl-[1900px]"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                onClick={nextSlide}
            >
                &#10095;
            </button>
            <div className="absolute font-[Arial,serif,Montserrat arm, Montserrat rus,] top-[300px] tracking-[0px] font-light leading-[4.571rem] mb-0 text-[3.714rem] left-[100px] text-piruz   p-3 rounded w-[500px]">
                {texts[currentSlide]}
            </div>

        </div>
    );
}
