import { useNavigate } from 'react-router-dom';
import plantIcon from '../assets/token.png'; // Use the uploaded image for the icon
import { Link } from 'react-router-dom';
function ActivityPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Choose Your Activity</h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img src={plantIcon} alt="Plant & Offer Trees" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Buy a Plant and Upload a Picture</h2>
          <p className="text-gray-600 text-center mb-4">Purchase a plant and upload a picture of it in your space.</p>
          <a href='https://envosafeapp.streamlit.app' alt=''>
          <button
            className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
            onClick={() => navigate('/buy-plant')}
          >
            Buy & Upload
          </button>
          </a>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img src={plantIcon} alt="Net Zero Citizen" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pay Us to Plant for You</h2>
          <p className="text-gray-600 text-center mb-4">Let us plant a tree for you and receive updates on its growth.</p>
          <Link to="/yourtree">
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        
          >
            Pay Us
          </button></Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img src={plantIcon} alt="Net Zero Citizen" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Buy from Our Website</h2>
          <p className="text-gray-600 text-center mb-4">Connect with nearby nurseries to buy and plant a tree.</p>
          <button
            className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
            onClick={() => navigate('/buy-website')}
          >
            Buy from Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
