import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Bncards from "./components/BnCards";
import "./App.css";
import BrOne from "./components/brOne";
import BannerSlider from "./components/sliderOne";
import Bncardstwo from "./components/bnCardsTwo";
import OfferOne from "./components/offerOne";
import Footer from "./components/footer";

import AuthForm from "./pages/signup";

import BrandSlider from "./components/sliderTwo";
import Home from "./components/home";



function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<AuthForm />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>


    </>
  );
}

export default App;
