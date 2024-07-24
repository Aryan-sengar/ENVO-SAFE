import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import plantImage1 from '../assets/plant1.jpg'; // Replace with actual image paths
import plantImage2 from '../assets/plant2.jpg';
import plantImage3 from '../assets/plant3.jpg';

function ActivityPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Choose Your Activity</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-lg">
          <img src={plantImage1} alt="Buy a Plant" className="w-32 h-32 mb-4 object-cover rounded-full border border-gray-300" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Buy a Plant and Upload a Picture</h2>
          <p className="text-gray-600 text-center mb-6">Purchase a plant and upload a picture of it in your space to contribute to our green initiatives.</p>
          <a href='https://envosafeapp.streamlit.app' target="_blank" rel="noopener noreferrer">
            <button
              className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
            >
              Buy & Upload
            </button>
          </a>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-lg">
          <img src={plantImage2} alt="Pay Us to Plant" className="w-32 h-32 mb-4 object-cover rounded-full border border-gray-300" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pay Us to Plant for You</h2>
          <p className="text-gray-600 text-center mb-6">Let us plant a tree for you and receive updates on its growth. Support green initiatives effortlessly.</p>
          <Link to="/yourtree">
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Pay Us
            </button>
          </Link>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-lg">
          <img src={plantImage3} alt="Buy from Website" className="w-32 h-32 mb-4 object-cover rounded-full border border-gray-300" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Buy from Our Website</h2>
          <p className="text-gray-600 text-center mb-6">Connect with nearby nurseries to buy and plant a tree. Support local businesses and the environment.</p>
          <button
            className="bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-700 transition-colors"
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
