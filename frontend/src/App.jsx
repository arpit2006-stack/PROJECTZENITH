import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Bncards from "./components/BnCards";
import "./App.css";
import BrOne from "./components/brOne";
import BannerSlider from "./components/sliderOne";
import Bncardstwo from "./components/bnCardsTwo";
import OfferOne from "./components/offerOne";
import Footer from "./components/footer";
<<<<<<< HEAD
import AuthForm from "./pages/signup";
=======
import BrandSlider from "./components/sliderTwo";
import Home from "./components/home";


>>>>>>> df9d3c5e8c2d92f774a25defaefb416869bb3377

function App() {
  return (
    <>
<<<<<<< HEAD
      <header>
        <Navbar />
      </header>
      <main>
        
        <Bncards />
        <Routes>
          <Route path="/signup" element={<AuthForm />} />
        </Routes>
      </main>
      <BannerSlider />
      <Bncardstwo />
      <OfferOne />
      <footer>
        <Footer />
      </footer>
=======
   
    <Navbar/>
    <Home/>
    {/* <BrOne/> */}
    <main>
     {/* <Bncards/> */}
    </main>
    {/* <BannerSlider/> */}
    {/* <Bncardstwo/> */}
    {/* <OfferOne/> */}
    {/* <BrandSlider /> */}
    <Footer/>


    
>>>>>>> df9d3c5e8c2d92f774a25defaefb416869bb3377
    </>
  );
}

export default App;
