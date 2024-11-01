import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import data from '../placesData';
import { useState } from 'react';

export default function Places() {
    const { t } = useTranslation(); 

    const [searchInput, setSearchInput] = useState('');

    const filteredPlace = data[0].filter(location =>
        t(location.title).toLowerCase().startsWith(searchInput.toLowerCase()) ||
        t(location.place).toLowerCase().startsWith(searchInput.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className="flex flex-col bg-purple items-center mt-10 p-6 bg-gray-100">
                <div className="w-full max-w-lg flex items-center bg-white shadow-md rounded-full overflow-hidden mb-6">
                    <input
                        type="text"
                        placeholder={t('Search for places...')}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-full"
                    />
                    <button className="bg-pink-300 hover:bg-blue-600 text-white px-4 py-2 rounded-r-full transition duration-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35M10 17a7 7 0 100-14 7 7 0 000 14z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="w-full max-w-lg">
                    {filteredPlace.map((location, index) => (
                        <div key={index} className="p-4 mb-4 bg-white shadow rounded-md">
                            <h2 className="text-lg font-semibold">{t(location.title)}</h2> 
                            <p className="text-gray-600">{t(location.place)}</p> 
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
