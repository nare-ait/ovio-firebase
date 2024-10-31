import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import call from '../assets/call2.png';
import place from '../assets/place.png';
import messageIcon from '../assets/download.png';
import armenia from '../assets/armenia.png';
import Language from './language';

export default function HeaderLanguageRow() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="flex items-center space-x-4 border-b border-gray-300 p-2">
            <img src={call} className="w-6 h-6" alt="Call Icon" />
            <p>+374 60 46 46 46</p>
            <img src={messageIcon} className="w-6 h-6" alt="Message Icon" />
            <p>info@ovio.am</p>
            <Link to="/places">
                <img src={place} className="w-6 h-6 cursor-pointer" alt="Place Icon" />
            </Link>
            <p>Գրասենյակներ և ծածկույթ</p>

            <div>
                <img
                    src={armenia}
                    onClick={toggleModal}
                    className="w-8 h-8 ml-[1000px] cursor-pointer"
                    alt="Armenian Flag"
                />
            </div>

            {isModalOpen && (
                <div className="inset-0 fixed z-20">
                    <div className="bg-white mt-[30px] ml-[1750px] p-4 rounded shadow-lg w-[120px] h-[120px] relative">
                        <button
                            onClick={toggleModal}
                            className="absolute top-2 right-2 text-gray-600"
                        >
                            ✖
                        </button>
                        <Language />
                    </div>
                </div>
            )}
        </div>
    );
}
