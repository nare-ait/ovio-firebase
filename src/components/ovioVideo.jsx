import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

export default function Video() {
    const { t, i18n } = useTranslation(); // Access i18n to get the current language

    return (
        <>
            <iframe
                width="1900"
                height="900px"
                src="https://www.youtube.com/embed/7w_0wDFemUg" 
                frameBorder="0"
                allowFullScreen
                className="absolute top-[2400px]"
                title="YouTube Video"
            ></iframe>

            <div className="grid grid-col left-[400px] w-[1100px] h-[300px] border rounded-[50px] absolute top-[3000px] bg-white">
                <img
                    className="ml-[400px] mt-[50px] w-48"
                    src="https://ovio.am/storage/uploads/logo/WR6F8UuyxCBldK0hgnfigpx72VT9YAQLfzWamCdI.svg"
                    alt=""
                />
                
                {i18n.language === 'hy' ? (
                    <img className='w-64 ml-[370px]' src={logo} alt="" />
                ) : (
                    <div className='text-4xl font-bold ml-[420px]'>Discover!</div>
                )}
            </div>
        </>
    );
}
