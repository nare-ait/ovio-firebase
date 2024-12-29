import React, { useState } from 'react';
import messageIcon from '../assets/download.png';

export default function Message() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isButtonLoading, setButtonLoading] = useState(false);

  const toggleModal = async () => {
    setButtonLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setButtonLoading(false);
    setModalOpen(!isModalOpen); 
  };

  return (
    <div className="fixed right-8 bottom-8 z-50">
      <div className="relative">
        <button
          onClick={toggleModal}
          className="bg-green rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          disabled={isButtonLoading}
        >
          {isButtonLoading ? (
            <span className="loader"></span>
          ) : (
            <img
              src={messageIcon}
              alt="Message"
              className="w-10 rounded-full h-10"
            />
          )}
        </button>

                {isModalOpen && (
                    <div className="fixed inset-0 ml-[1400px] flex items-center justify-center">
                    <div className="bg-white rounded shadow-lg h-[550px] w-[350px]">
                        <div className='w-full h-[200px] bg-purple'>
                            <h2 className="text-lg text-white p-8 text-center">
                                Խնդրում ենք գրել հարցը, մեր մասնագետները հնարավորինս արագ կպատասխանեն Ձեզ
                            </h2>
                        </div>

                        <div className='w-[300px] h-[300px] border-l-2 left-[100px] border-purple bg-white absolute top-[380px]'>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="*Անունը"
                                    className="p-2 border-t border-gray w-full mb-4 rounded"
                                    required
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="*Էլ հասցե"
                                    className="p-2 border-t border-gray w-full mb-4 rounded"
                                    required
                                />
                                <input
                                    type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="*Հեռախոսահամար"
                                    className="p-2 border-t border-gray w-full mb-4 rounded"
                                    required
                                />
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="*Նամակ"
                                    className="p-2 w-full border-b border-gray h-[70px] mb-4 rounded"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="bg-purple mt-[20px] text-white rounded-lg p-2 w-full mb-2"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Sending...' : 'Ուղարկել  >>>>>>'}
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