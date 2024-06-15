
// import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Common Pages/Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../Home/HomePage.jsx";
import LogIn from "../Common Pages/LogIn_SignIn/LogIn.jsx";
import SignIn from "../Common Pages/LogIn_SignIn/SignIn.jsx";

const Main = () => {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Main;