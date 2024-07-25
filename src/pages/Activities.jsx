import plantConservationImg from "../assets/plantimg.jpg";
import waterManagementImg from "../assets/watermanagement.jpg";
import airPollutionImg from "../assets/airpollution1.jpg";
import tokenImage from "../assets/token.png"; // Add a token image for visual appeal
import { Link } from "react-router-dom";

const activities = [
  {
    title: "Plant Conservation",
    description: "Promote and protect the conservation of plant species.",
    id: "plant-conservation",
    image: plantConservationImg,
    tokens: 1, // Example token value
  },
  {
    title: "Water Management",
    description: "Efficiently manage and conserve water resources.",
    id: "water-management",
    image: waterManagementImg,
    tokens: 1, // Example token value
  },
  {
    title: "Air Pollution Control",
    description: "Initiatives to reduce air pollution and improve air quality.",
    id: "air-pollution",
    image: airPollutionImg,
    tokens: 1, // Example token value
  },
  {
    title: "Sustainable Agriculture",
    description: "Initiatives to promote sustainable agriculture",
    id: "air-pollution",
    image: airPollutionImg,
    tokens: 1, // Example token value
  },
  // Add more activities here
];

const Activities = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Green Credit Programs</h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Explore our various Green Credit Programs designed to promote environmental sustainability and conservation efforts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{activity.title}</h2>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <div className="flex items-center mb-4">
                <img
                  src={tokenImage}
                  alt="Token"
                  className="w-10 h-10 mr-2"
                />
                <span className="text-lg font-bold text-green-600">{activity.tokens} Token</span>
              </div>
              <Link to="/plantconservation">
              <a
                href="#"
                className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
              >
                Learn More
              </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
