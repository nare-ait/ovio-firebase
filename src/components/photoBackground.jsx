import React from 'react';

const school = "https://ovio.am/storage/uploads/banner_list/TBOkzbTXwiHLd04sz6SYZJx7SiDqQ7SV7k5EyUA1.png";
const camera = "https://ovio.am/storage/uploads/banner_list/waQr5Psvyy6JfTbGfoRsYpKvTzWzeTA91RDGYPzP.png";

export default function Photo() {
    const title = [
        "Data Center",
        "Տեսահսկում բիզնեսի համար"
    ]
    const description =[
        "Ձեր տվյալները՝ Հայաստանի հզորագույն և խոշորագույն Տվյալների մշակման կենտրոնում",
        "Ապահովե՛ք անվտանգություն և պահե՛ք Ձեր բիզնեսը հսկողության տակ"
    ]
    const colors = [
        "bg-purple","bg-teal-300"
    ]
    const images = [school, camera];

    return (
        <div className="grid grid-cols-2 h-screen">
            {images.map((src, index) => (
                <div key={index} className="relative w-full h-[500px] mt-[100px]">
                    <img
                        src={src}
                        alt={`Image ${index}`}
                        className="w-full h-full brightness-75 object-cover"
                    />
                    <div className="text-center absolute bottom-[200px] left-[150px] text-white text-[40px] font-bold ">
                            {title[index]}
                    </div>
                    <div className="text-left left-[150px] w-[800px] absolute bottom-[100px] text-white text-[20px]">
                            {description[index]}
                    </div>
                    <button className={` absolute w-[200px] top-[430px] left-[150px] h-[50px] rounded bottom-[100px] text-white ${colors[index]}`}>
                        Իմացիր ավելին 
                    </button>
                </div>
            ))}
        </div>
    );
}