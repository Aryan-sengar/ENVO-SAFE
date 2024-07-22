const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-4 mt-auto">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <p>2024 Envosafe. All Rights Reserved</p>
          </div>
          <div className="flex space-x-4">
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#security" className="hover:underline">Security</a>
            <a href="#sitemap" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  