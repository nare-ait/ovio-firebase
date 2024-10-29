import React, { useState } from 'react';
import messageIcon from '../assets/message.png'

export default function Message() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue); // Handle the input value (e.g., send to server)
        setInputValue(''); // Clear the input field
        toggleModal(); // Close the modal
    };

    return (
        <>
            <div className="relative bg-purple rounded-full w-[60px] h-[60px]">
                {/* Message Icon */}
                <img
                    src={messageIcon}
                    alt="Message"
                    onClick={toggleModal}
                    className="cursor-pointer w-12 h-12"
                />

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <h2 className="text-lg font-bold mb-4">Send a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Type your message..."
                                    className="border p-2 w-full mb-4"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded"
                                >
                                    Send
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="bg-red-500 text-white p-2 rounded ml-2"
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
