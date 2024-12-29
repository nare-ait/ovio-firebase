import React, { useState } from "react";
import messageIcon from "../assets/download.png";
import App from "../../frontend-chat/src/App";  

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
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded shadow-lg h-[600px] w-[400px] overflow-hidden relative">
              <div className="w-full bg-purple py-4 px-6 text-white text-lg font-bold flex justify-between items-center">
                <span>Firebase Chat</span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-white text-xl font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 h-full">
                <App />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

}
