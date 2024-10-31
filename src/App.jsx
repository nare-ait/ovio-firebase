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
import Message from './components/message';
import Places from './pages/places'


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
                                    <Slider/>
                                </div>
                                <WhyOvio />
                                <Arajarkner />
                                <Video />
                                <Comforte />
                                <Photo />
                                <Footer />
                                <Message />
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
                <Route path="/places" element={<Places />} />
            </Routes>
        </Router>
    );
}

export default App;
