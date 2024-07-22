import { Link } from 'react-router-dom';
import plantImage from '../../assets/homepagefin.png'; // Update this path to your image location

const FrontPage = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between p-4 md:p-16">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower Your Green Journey</h1>
        <p className="text-lg text-gray-600 mb-8">
          Join the Green Credit Programme and take part in activities that promote sustainability and environmental conservation. Earn credits for your green actions and make a positive impact on the planet.
        </p>
        <Link to='/signup'><button className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
          Join Now &rarr;
        </button></Link>
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0">
        <img src={plantImage} alt="Sustainable environment" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default FrontPage;
