import React, { useState, useEffect } from 'react';
import i18n from '../utils/i18n';
import armenia from '../assets/armenia.png';
import usa from "../assets/america.png";

export default function Language() {
  const [isModalOpen, setModalOpen] = useState(false);

  const changeLanguage = (lng, event) => {
    event.stopPropagation();
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setModalOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="flex flex-col justify-around items-center space-y-2">
      <div onClick={(event) => changeLanguage('hy', event)} className="cursor-pointer">
        <img src={armenia} className="w-12 rounded-full" alt="Armenian flag" />
      </div>
      <div onClick={(event) => changeLanguage('en', event)} className="cursor-pointer">
        <img src={usa} className="w-12 rounded-full" alt="USA flag" />
      </div>
    </div>
  );
}
