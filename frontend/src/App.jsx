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
import CareerPage from "./pages/career";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import TermsAndConditions from "./pages/T&C";
import AdminPanel from "./pages/admin";
import Shirts from './pages/shirts';
import TShirts from './pages/t-shirt';
import Hoodies from "./pages/hoodies";
import Watches from "./pages/watches";
import Shoes from "./pages/shoes";
// import CartPage from "./pages/cart";
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
          <Route path="/career" element={<CareerPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/t&c" element={<TermsAndConditions/>} />
          <Route path="/admin" element={<AdminPanel/>} />
          <Route path="/shirts" element={<Shirts/>} />
          <Route path="/t-shirt" element={<TShirts/>} />
          <Route path="/hoodies" element={<Hoodies/>} />
          <Route path="/watches" element={<Watches/>} />
          <Route path="/shoes" element={<Shoes/>} />
          {/* <Route path="/cart" element={<CartPage/>} /> */}
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
