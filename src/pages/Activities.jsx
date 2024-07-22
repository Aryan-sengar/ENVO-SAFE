import plantConservationImg from "../assets/plantimg.jpg";
import waterManagementImg from "../assets/watermanagement.jpg";
import airPollutionImg from "../assets/airpollution1.jpg";

const activities = [
  {
    title: "Plant Conservation",
    description: "Promote and protect the conservation of plant species.",
    id: "plant-conservation",
    image: plantConservationImg,
  },
  {
    title: "Water Management",
    description: "Efficiently manage and conserve water resources.",
    id: "water-management",
    image: waterManagementImg,
  },
  {
    title: "Air Pollution Control",
    description: "Initiatives to reduce air pollution and improve air quality.",
    id: "air-pollution",
    image: airPollutionImg,
  },
  // Add more activities here
];

const Activities = () => {
  return (
    <div className="bg-white-900 text-green-600 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Green Credit Programs</h1>
      <p className="text-center mb-8 text-lg">
        Explore our various Green Credit Programs designed to promote environmental sustainability and conservation efforts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-green-200 p-6 rounded-lg shadow-lg">
            <img src={activity.image} alt={activity.title} className="w-full h-50 object-cover rounded-lg mb-4 " />
            <h2 className="text-2xl font-bold mb-2 text-white">{activity.title}</h2>
            <p className="text-black-400 text-white">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
