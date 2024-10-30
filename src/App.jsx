import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Registration from './pages/registration';
import LogIn from './pages/log-in';
import Slider from './components/firstSlider';
import WhyOvio from './components/whyOvio';
import Arajarkner from './components/arajarkner';
import Video from './components/ovioVideo';
import Comforte from './components/comforteWithUs';
import Photo from './components/photoBackground';
import Footer from './components/footer';

import bacahaytir from "./assets/bacahaytir2.png";
import games from './assets/games.png';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
    };

    let slides = [
        bacahaytir,
        "https://ovio.am/storage/uploads/special_offers//2kcacxfLLWnelU3kBUBifDVTFrsxYi0XSbA29vTz.png",
        games,
    ];
    let texts = [
        "Միացի՛ր All in տարեկան III-ին ♡ 4950 դրամով՝ 9900-ի փոխարեն",
        "Բարի գալուստ OVIO",
        "Զգա՛ խաղը, փոխի՛ր իրականությունը"
    ];

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isLoggedIn ? (
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
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
                <Route
                    path="/login"
                    element={
                        isLoggedIn ? <Navigate to="/" replace /> : <LogIn onLogin={handleLogin} />
                    }
                />
                <Route path="/register" element={<Registration />} />
            </Routes>
        </Router>
    );
}

export default App;
