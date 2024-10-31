import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import people from "../assets/images.png";
import HeaderLanguageRow from './headeLanguage';
export default function Header() {
    const { t } = useTranslation();
    
    return (
        <>
            <HeaderLanguageRow />
            <div className="flex items-center justify-between mt-6 ml-16 max-2xl:ml-4 max-2xl:mt-8">
                <div className="flex items-center space-x-8">
                    <img
                        className="w-48 max-2xl:w-36"
                        src="https://ovio.am/storage/uploads/logo/WR6F8UuyxCBldK0hgnfigpx72VT9YAQLfzWamCdI.svg"
                        alt="Logo"
                    />
                    <ul className="flex items-center space-x-20 max-2xl:space-x-4">
                        <li className="font-bold">{t('specialOffers')}</li>
                        <li className="font-bold">{t('forHome')}</li>
                        <li className="font-bold">{t('forBusiness')}</li>
                        <li className="font-bold">{t('aboutUs')}</li>
                        <li className="font-bold">{t('pay')}</li>
                        <li className="font-bold">{t('help')}</li>
                    </ul>
                    <div className="flex items-center space-x-2">
                        <img className="w-6 ml-[70px] max-2xl:ml-4" src={people} alt="Profile" />
                        <Link to="/register">
                            <button
                                className="bg-purple w-56 ml-8 text-white font-semibold py-3 px-2 rounded-lg hover:bg-purple max-2xl:w-48"
                            >
                                {t('joinNow')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
