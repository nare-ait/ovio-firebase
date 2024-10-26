import LoginPage from './pages/log-in'; 
import Header from './components/header';
import Slider from './components/firstSlider';
import bacahaytir from "./assets/bacahaytir2.png";
import bacahaytir2 from "./assets/bacahaytir3.png";
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
        </>
    );
}

export default App;
