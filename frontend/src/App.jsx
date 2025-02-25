
import Navbar from "./components/navbar"
import Bncards from "./components/BnCards"
import "./App.css";
import BrOne from "./components/brOne";
import BannerSlider from "./components/sliderOne";
import Bncardstwo from "./components/bnCardsTwo"
import OfferOne from "./components/offerOne";



function App() {

  return (
    <>
    <Navbar/>
    <BrOne/>
    <main>
     <Bncards/>
    </main>
    <BannerSlider/>
    <Bncardstwo/>
    <OfferOne/>


    
    </>
  )
}

export default App
