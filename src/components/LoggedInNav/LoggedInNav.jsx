import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import userimg from "../../assets/user-png-33842.png"; // Placeholder image, replace with dynamic user image if available
import logo from "../../assets/envosafelogo.png"
const LoggedInNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/signin");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
      <div className="text-white text-lg font-bold"><Link to={"/"}><img src={logo} alt="logo" height={120} width={120} /></Link></div>
      <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/activities" className="text-white hover:text-gray-300">Activities</Link>
          <Link to="/events" className="text-white hover:text-gray-300">Events</Link>
          <Link to="/marketplace" className="text-white hover:text-gray-300">Marketplace</Link>
          <Link to="/voucher" className="text-white hover:text-gray-300">Reedem Voucher</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <button
            className="text-white hover:text-gray-300 m-2"
            onClick={handleLogout}
          >
            Logout
          </button>
          <Link to="/dashboard">
            <img
              src={userimg}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
