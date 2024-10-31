import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const home = "https://ovio.am/storage/assets/images/icons/1625672860.svg";
const call = "https://ovio.am/storage/assets/images/icons/1625608031.svg";
const busines = "https://ovio.am/storage/assets/images/icons/1628842501.svg";

export default function Comforte() {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const colors = ["bg-purple", "bg-teal-400", "bg-blue-900"];
    const title = [
        t('comforteHome'),
        t('comfortePhoneService'),
        t('comforteBusiness')
    ];
    const text = [
        t('comforteHomeText'),
        t('comfortePhoneText'),
        t('comforteBusinessText')
    ];
    const icons = [home, call, busines];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % colors.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + colors.length) % colors.length);
    };

    const getSlideStyles = (index) => {
        if (index === currentSlide) {
            return "translate-x-0 scale-100 opacity-100 z-20";
        }
        if (index === (currentSlide - 1 + colors.length) % colors.length) {
            return "-translate-x-[40%] scale-90 opacity-60 z-10";
        }
        if (index === (currentSlide + 1) % colors.length) { 
            return "translate-x-[40%] scale-90 opacity-60 z-10";
        }
        return "scale-75 opacity-30 z-0";
    };

    return (
        <>
            <div className="mt-[800px] ml-[200px] text-black font-bold text-[30px]">
                <p>{t('comforteTitle')}</p>
            </div>

            <div className="relative w-[1500px] h-[600px] mx-auto mt-8 overflow-hidden flex items-center justify-center">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`absolute w-[700px] h-[500px] rounded-lg flex flex-col items-center justify-center border ${color} ${getSlideStyles(index)} transition-all duration-500`}
                    >
                        <img 
                            src={icons[index]} 
                            alt={`Icon ${index}`} 
                            className="w-12 h-12 absolute top-[60px] mr-[500px]" 
                        />
                        <div className="text-center text-white text-[28px] font-bold mt-4">
                            {title[index]}
                        </div>
                        <div className="text-white text-[16px] leading-relaxed w-[600px] mt-auto p-4 shadow-lg fixed bottom-10">
                            {text[index]}
                        </div>
                    </div>
                ))}
                <button
                    className="absolute left-[50px] rounded-full border top-1/2 transform -translate-y-1/2 text-black p-2 w-10 h-10 flex items-center justify-center"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>
                <button
                    className="absolute right-[50px] rounded-full border top-1/2 transform -translate-y-1/2 text-black p-2 w-10 h-10 flex items-center justify-center"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </>
    );
}
