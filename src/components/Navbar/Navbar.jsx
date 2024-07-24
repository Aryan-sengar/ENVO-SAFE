import { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/envosafelogo.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  return (<>
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold"><Link to={"/"}><img src={logo} alt="logo" height={120} width={120} /></Link></div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <a href="#aboutus" className="text-white hover:text-gray-300">About us</a>
          <Link to="/blogs"  className="text-white hover:text-gray-300">Blogs</Link>
          <Link to="/contactus" className="text-white hover:text-gray-300">Contact Us</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/signin" className="text-white hover:text-gray-300 mt-1">Sign in</Link>
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
            <Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
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
