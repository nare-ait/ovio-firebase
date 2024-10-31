import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
const logo = "https://ovio.am/storage/uploads/logo/LlPhhUcWWY5UfoLd6OQTSqnLz8L5QcIYZNHC11af.svg";

export default function Footer() {
    const { t } = useTranslation();
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-[1900px] h-[700px] bottom-[200px] bg-black relative">
            <div className="absolute left-[300px] top-[50px]">
                <img className="w-[146px]" src={logo} alt="img" />
            </div>

            <div className="absolute left-[300px] top-[200px]">
                <h1 className="text-white border-b w-[500px] border-white pb-2">
                    {t('sectionsTitle')}
                </h1>
            </div>

            <div className="absolute left-[300px] top-[250px] flex w-[25%] mt-5">
                <div className="w-1/2 pr-4">
                    <ul className="text-white space-y-1"> 
                        {t('websiteSections', { returnObjects: true }).slice(0, 8).map((section, index) => (
                            <li key={index}>{section}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/2"> 
                    <ul className="text-white space-y-1"> 
                        {t('websiteSections', { returnObjects: true }).slice(8).map((section, index) => (
                            <li key={index}>{section}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="absolute left-[900px] top-[200px]">
                <h1 className="text-white border-b w-[400px] border-white pb-2">
                    {t('serviceMapTitle')}
                </h1>
            </div>

            <div className="absolute left-[1360px] top-[200px]">
                <h1 className="text-white border-b w-[400px] border-white pb-2">
                    {t('qualityControlTitle')}
                </h1>
            </div>

            <div className="absolute left-[1400px] top-[250px]">
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input ref={inputRef1} type="text" placeholder={t('purposePlaceholder')} className="p-2 bg-lightBlack rounded-lg border-white w-[400px] block" />
                    <input ref={inputRef2} type="text" placeholder={t('namePlaceholder')} className="p-2 bg-lightBlack rounded-lg border-gray w-[400px] block" />
                    <input ref={inputRef3} type="text" placeholder={t('emailPlaceholder')} className="p-2 bg-lightBlack rounded-lg border-gray w-[400px] block" />
                    <input ref={inputRef4} type="text" placeholder={t('phonePlaceholder')} className="p-2 bg-lightBlack rounded-lg border-gray w-[400px] block" />
                    <input ref={inputRef5} type="text" placeholder={t('messagePlaceholder')} className="p-2 bg-lightBlack rounded-lg border-gray h-[150px] w-[400px] block" />
                    <button type="submit" className="bg-purple w-[400px] text-white  p-2 rounded">
                        {t('submitButtonText')}
                    </button>
                </form>
            </div>
        </div>
    );
}
