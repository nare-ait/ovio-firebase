import { Link } from 'react-router-dom';
import people from "../assets/images.png";

export default function Header() {
    return (
        <div className="flex items-center justify-between mt-16 ml-16 max-2xl:ml-4 max-2xl:mt-8">
            <div className="flex items-center space-x-8">
                <img
                    className="w-48 max-2xl:w-36"
                    src="https://ovio.am/storage/uploads/logo/WR6F8UuyxCBldK0hgnfigpx72VT9YAQLfzWamCdI.svg"
                    alt="Logo"
                />
                <ul className="flex items-center space-x-20 max-2xl:space-x-4">
                    <li className="font-bold">Հատուկ առաջարկներ</li>
                    <li className="font-bold">Տան համար</li>
                    <li className="font-bold">Բիզնեսի համար</li>
                    <li className="font-bold">Մեր մասին</li>
                    <li className="font-bold">Վճարել</li>
                    <li className="font-bold">Օգնություն</li>
                </ul>
                <div className="flex items-center space-x-2">
                    <img className="w-6 ml-[70px] max-2xl:ml-4" src={people} alt="Profile" />
                    <Link to="/register">
                        <button
                            className="bg-purple w-56 ml-8 text-white font-semibold py-3 px-2 rounded-lg hover:bg-purple max-2xl:w-48" // Smaller button width on screens < 1800px
                        >
                            Միացի՛ր Հիմա
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
