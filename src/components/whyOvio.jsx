import React, { useState } from 'react';

export default function WhyOvio() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const colors = ["bg-teal-500", "bg-purple", "bg-teal-500", "bg-purple", "bg-teal-500"];
    const texts = [
        "Հուսալի է",
        "Կայուն է",
        "Վստահելի է",
        "Նորարար է",
        "Ճկուն է"
    ];
    const numbers = ["1", "2", "3", "4", "5"];
    const text2 = [
        "Երեք միջազգային կապուղիներ դեպի Ռուսաստան և Եվրոպա",
        "Համացանցի դիվերսիֆիկացված միջազգային ռեսուրսներ",
        "Տասնյակ հազարավոր բաժանորդներ ՀՀ 19 քաղաքներում",
        "Արդի տեխնոլոգիական լուծումներ և ծառայություններ",       
        "Ծառայությունների ընտրության լայն հնարավորություն",
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % texts.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + texts.length) % texts.length);
    };

    return (
        <>
            <div className="mt-[900px] ml-[200px] text-black font-bold text-[30px]">
                <p>Ինչու՞ OVIO</p>
            </div>
            <div className="relative w-[1900px] h-[400px]  mx-auto mt-8 bg-purple-900 rounded-r-full overflow-hidden flex items-center">
                <div
                    className="flex ml-[190px] transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * (100 / 3.5)}%)` }}
                >
                    {texts.map((text, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 border rounded-lg w-[calc(100%/3.5)] h-[200px] mx-2 flex flex-col justify-center`}
                        >
                            <div className={`absolute top-0 w-[100px] h-[200px] ${colors[index]} rounded-r-full flex items-center justify-center`}>
                                <div className="text-white font-bold text-[35px]">
                                    {numbers[index]}
                                </div>
                            </div>
                            <div className="ml-[150px] text-black text-[24px] font-semibold mt-2">
                                {text}
                            </div>
                            <div className="ml-[150px] text-gray text-[15px] mt-6">
                                {text2[index]}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute left-[150px] rounded-full border top-1/2 transform -translate-y-1/2 text-black p-2 w-10 h-10 flex items-center justify-center"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>
                <button
                    className="absolute right-0 rounded-full border top-1/2 transform -translate-y-1/2 text-black p-2 w-10 h-10 flex items-center justify-center"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </>
    );
}
