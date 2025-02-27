// import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
        <div>
          <h2 className="text-2xl font-bold">FashionHub</h2>
          <p className="mt-2 text-gray-400">Elevate your style with our premium fashion collection.</p>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              {/* <FaFacebookF /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              {/* <FaInstagram /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              {/* <FaTwitter /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              {/* <FaTiktok /> */}
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} FashionHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
