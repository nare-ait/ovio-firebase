import React, { useState } from 'react';
import messageIcon from '../assets/message.png';

export default function Message() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(inputValue);
        setInputValue(''); 
        setIsLoading(false); 
        toggleModal(); 
    };

    return (
        <div className="fixed right-8 bottom-8 z-50">
            <div className="relative">
                <button
                    onClick={toggleModal}
                    className="bg-purple rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <img
                        src={messageIcon}
                        alt="Message"
                        className="w-10 h-10"
                    />
                </button>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="bg-white  rounded shadow-lg h-[550px] w-[350px]">
                            <div className='w-full h-[200px] bg-purple'>
                                <h2 className="text-lg  text-white p-8 text-center">
                                    Խնդրում ենք գրել հարցը, մեր մասնագետները հնարավորինս արագ կպատասխանեն Ձեզ
                                </h2>
                            </div>


                            <div className='w-[300px] h-[300px] border-l left-[800px]  bg-white absolute top-[380px]'>


                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="*Անունը"
                                        className="p-2 border-t border-gray w-full mb-4 rounded"
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="*Էլ հասցե"
                                        className="p-2 border-t border-gray w-full mb-4 rounded"
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="*Հեռախոսահամար"
                                        className="p-2 border-t border-gray w-full mb-4 rounded"
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="*Նամակ"
                                        className="p-2 w-full border-t border-gray h-[70px] mb-4 rounded"
                                        required
                                    />
                                    
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white p-2 rounded w-full mb-2"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Sending...' : 'Send'}
                                    </button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
