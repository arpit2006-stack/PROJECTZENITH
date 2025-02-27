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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
