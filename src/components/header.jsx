import people from "../assets/images.png";

export default function Header() {
    return (
        <div className="flex items-center justify-between mt-16 ml-16">
            <div className="flex items-center space-x-8">
                <img
                    className="w-48"
                    src="https://ovio.am/storage/uploads/logo/WR6F8UuyxCBldK0hgnfigpx72VT9YAQLfzWamCdI.svg"
                    alt=""
                />
                <ul className="flex items-center space-x-20">
                    <li className="font-bold">Հատուկ առաջարկներ</li>
                    <li className="font-bold">Տան համար</li>
                    <li className="font-bold">Բիզնեսի համար</li>
                    <li className="font-bold">Մեր մասին</li>
                    <li className="font-bold">Վճարել</li>
                    <li className="font-bold">Օգնություն</li>
                </ul>
                <div className="flex items-center space-x-2">
                    <img className="w-6 ml-[70px]" src={people} alt="" />
                    <p className="font-bold">Մուտք</p>
                    <button
                        className="bg-purple w-56 ml-8 text-white font-semibold py-3 px-2 rounded-lg hover:bg-purple-400"
                    >
                        Միացի՛ր Հիմա
                    </button>

                </div>
            </div>
        </div>
    );
}
