import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (<>
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">Envosafe</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <a href="#" className="text-white hover:text-gray-300">About us</a>
          <a href="#" className="text-white hover:text-gray-300">FAQ</a>
          <Link to="/contactus" className="text-white hover:text-gray-300">Contact Us</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/signin" className="text-white hover:text-gray-300 m-2">Sign in</Link>
          <Link to="/signup">
            <button className="bg-white text-green-600 font-semibold py-1 px-4 rounded hover:bg-gray-100">Sign up</button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <a href="#" className="text-white hover:text-gray-300">About us</a>
            <a href="#" className="text-white hover:text-gray-300">FAQ</a>
            <Link to="/contactus" className="text-white hover:text-gray-300">Contact Us</Link>
            <Link to="/signin" className="text-white hover:text-gray-300">Sign in</Link>
            <Link to="/signup">
              <button className="bg-white text-green-600 font-semibold py-1 px-4 rounded hover:bg-gray-100">Sign up</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
