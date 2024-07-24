import logo from "../../src/assets/user-png-33842.png"
const BlogPage = () => {
  const blogs = [
    {
      title: "The Importance of Saving Plants and How You Can Help at Home",
      image: "https://pbs.twimg.com/profile_images/1012992151083335680/uJO19rwl_400x400.jpg", // Replace with actual image URL
      content: `Plants are the backbone of life on Earth, playing a critical role in maintaining the balance of our ecosystems. They provide oxygen, food, shelter, and countless other benefits that sustain life. Saving plants is essential for preserving biodiversity, combating climate change, and ensuring a healthy environment for future generations. Here’s why it’s important to save plants, how you can help at home, and the benefits of planting them in your living space.`,
      author: "Envosafe",
      date: "July 24, 2024"
    },
    // Add more blog objects if needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700">Envosafe Blog</h1>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>
              <div className="flex items-center">
                <img src={logo}alt={blog.author} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">{blog.author}</p>
                  <p className="text-gray-600 text-sm">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center mt-12">
        <p className="text-gray-600">© 2024 Envosafe</p>
      </footer>
    </div>
  );
};

export default BlogPage;
