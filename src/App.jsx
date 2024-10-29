import LoginPage from './pages/log-in'; 
import Header from './components/header';
import Slider from './components/firstSlider';
import WhyOvio from './components/whyOvio';
import Arajarkner from './components/arajarkner';
import Video from './components/ovioVideo';
import Comforte from './components/comforteWithUs';
import Photo from './components/photoBackground'
import Footer from './components/footer';

const bacahaytir2 = ['https://ovio.am/storage/uploads/special_offers//2kcacxfLLWnelU3kBUBifDVTFrsxYi0XSbA29vTz.png']
import bacahaytir from "./assets/bacahaytir2.png";
import games from './assets/games.png'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
    let slides = [
        bacahaytir2, 
        bacahaytir, 
        games,
    ];
    let texts = [
        "Միացի՛ր All in տարեկան III-ին ♡ 4950 դրամով՝ 9900-ի փոխարեն",
        "Բարի գալուստ OVIO",
        "Զգա՛ խաղը, փոխի՛ր իրականությունը"
    ];

    return (
        <>
            <Header />
            <div className='w-3/4 m-auto pt-12'>
                <Slider slides={slides} texts={texts} />
            </div>
            <WhyOvio />
            <Arajarkner />
            <Video />
            <Comforte />
            <Photo />
            <Footer />
        </>
    );
}

export default App;
