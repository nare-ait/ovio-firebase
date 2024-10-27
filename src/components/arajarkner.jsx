import { useState } from 'react';
const bacahaytir2 = ['https://ovio.am/storage/uploads/special_offers//2kcacxfLLWnelU3kBUBifDVTFrsxYi0XSbA29vTz.png']
const games = ['https://ovio.am/storage/uploads/special_offers//lDfSbOwifz8qSoJq1Nfrdp0Dywv2FCTL3GDuevYV.png']
const girl = ['https://ovio.am/storage/uploads/slider/yWYSNPqgkyQ7F7Cbh59nKhxFXq86TEay63YoKBH3.png']
const girl2 = ['https://ovio.am/storage/uploads/special_offers//MvIdiyQzrs521nb4fLacWx29p2ZMYXBf4AI8mpXp.png']
export default function Arajarkner() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        bacahaytir2,
        games,
        girl,
        girl2
    ];
    const text1 = [

        "4950 ֏՝ 3 ամիս 50% զեղչված գնով",
        "Վերածի՛ր հին և թույլ համակարգիչը, պլանշետը կամ սմարթֆոնը սուպեր արագ սարքի մեկ քլիքով",
        "OVIO-ն և Վեգան ներկայացնում են",
        "Շաբաթ-կիրակին OVIO-ի հետ"

    ];

    const text2 = [
        "Միացի՛ր All in տարեկան III փաթեթին 4950 ֏՝ 3 ամիս 50% զեղչված գնով",
        "GFN.AM ամպային խաղային ծառայության Premium բաժանորդագրություն",
        "Կատարի՛ր գնումներ ՄԵԾԱԾԱԽ գներով Վեգայից` դառնալով OVIO-ի բաժանորդ",
        "weekend-ը նոր արագություններով",
    ]


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <div className="mt-12 ml-[200px] text-black font-bold text-3xl">
                <p>Հատուկ առաջարկներ</p>
            </div>
            <div className="relative mx-auto ml-[150px] w-[90vw] h-[1000px] mt-8 overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 25}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-1/3 h-full flex justify-center p-2 relative" 
                        >
                            <img
                                src={slide}
                                alt="Slide"
                                className="w-[800px] h-[600px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center left-[20px] top-[200px] text-white text-[20px] font-semibold">
                                {text1[index]}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center left-[20px] top-[350px] text-gray text-[17px] font-bold">
                                {text2[index]}
                            </div>
                        </div>
                    ))}

                </div>
                <button
                    className="absolute left-4 top-[300px] transform -translate-y-1/2 rounded-full bg-white border text-gray-800 p-2 shadow-md hover:bg-gray-100 transition-all"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>
                <button
                    className="absolute right-4 top-[300px] transform -translate-y-1/2 rounded-full bg-white border text-gray-800 p-2 shadow-md hover:bg-gray-100 transition-all"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </>
    );
}
