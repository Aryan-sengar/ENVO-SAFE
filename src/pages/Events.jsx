const campaigns = [
  {
    id: 1,
    title: 'Public Transport Challenge',
    description: 'Use public transport instead of a personal vehicle for a week.',
    reward: 100,
    verification: 'Upload a photo of your public transport ticket each day.',
    photo: 'https://www.shutterstock.com/image-photo/chennai-tamilnadu-29-november-2023-600nw-2394553371.jpg',
  },
  {
    id: 2,
    title: 'Plant a Tree Initiative',
    description: 'Plant a tree and take care of it for a month.',
    reward: 150,
    verification: 'Upload a photo of the planted tree at the start and a weekly update photo for a month.',
    photo: 'https://images.squarespace-cdn.com/content/v1/5cb3ca007a1fbd45aeff89ea/ea79c0ff-b265-44dd-810c-93908bdbc8df/ntcc-new-tree-sapling',
  },
  {
    id: 3,
    title: 'Community Clean-Up Day',
    description: 'Participate in a community clean-up event.',
    reward: 75,
    verification: 'Upload a photo of the clean-up activity.',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuivAPQiqcehkt7MwPgwenBGbmD_dtwghgw&s',
  },
  {
    id: 4,
    title: 'Beach Cleanup Initiative',
    description: 'Join a beach cleanup drive and help remove litter from the beach.',
    reward: 120,
    verification: 'Upload a photo of you participating in the beach cleanup.',
    photo: 'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/18/Pictures/girgaum-beach-cleanup_34a68eae-7d0a-11e6-85ec-37294133f8ac.JPG',
  },
  {
    id: 5,
    title: 'Eco-Friendly Product Challenge',
    description: 'Use eco-friendly products for a week and reduce plastic usage.',
    reward: 90,
    verification: 'Upload a photo of the eco-friendly products you used.',
    photo: 'https://youthincmag.com/wp-content/uploads/2021/10/iStock-1161748765.jpg',
  },
  {
    id: 6,
    title: 'Bicycle to Work Week',
    description: 'Use a bicycle for commuting to work for a week.',
    reward: 110,
    verification: 'Upload a photo of you with your bicycle at work.',
    photo: 'https://images.giant-bicycles.com/pwmrwkoourqhjy4hvqoi/preview.jpg',
},
];

const EventPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Environmental Sustainability Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={campaign.photo} alt={campaign.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">{campaign.title}</h2>
            <p className="mt-2">{campaign.description}</p>
            <p className="mt-2"><strong>Reward:</strong> {campaign.reward} green credits</p>
            <p className="mt-2"><strong>Verification:</strong> {campaign.verification}</p>
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              onClick={() => alert('Participate button clicked')}
            >
              Participate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
