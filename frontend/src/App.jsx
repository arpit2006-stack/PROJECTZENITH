import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Bncards from "./components/BnCards";
import "./App.css";
import BrOne from "./components/brOne";
import BannerSlider from "./components/sliderOne";
import Bncardstwo from "./components/bnCardsTwo";
import OfferOne from "./components/offerOne";
import Footer from "./components/footer";
import SignUpForm from "./pages/signup"
import LoginForm from "./pages/login";
import BrandSlider from "./components/sliderTwo";
import Home from "./components/home";



function App() {
  return (
    <>
    {/* <BrowserRouter> */}
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
