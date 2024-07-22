import aboutusimg from "../../assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-white p-8">
      <div className="lg:w-1/2 w-full mb-10 mt-10 lg:mb-0">
        <img src={aboutusimg} alt="Environmental conservation" className="rounded-lg shadow-lg scale-75" />
      </div>
      <div className="lg:w-1/2 w-full lg:pl-8">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <h2 className="text-4xl font-bold mb-4">
          Empowering Communities to <span className="text-green-500">Go Green</span> with the Green Credit Programme.
        </h2>
        <p className="text-gray-700 mb-4">
          Our mission is to inspire and incentivize environmental preservation and sustainable practices through the Green Credit Programme. We believe that every green action, no matter how small, can make a significant impact. By participating in our programme, individuals and businesses can earn credits for their green initiatives and contribute to a healthier planet.
        </p>
        <p className="text-gray-700 mb-4">
          Join us in our effort to promote sustainability, reduce carbon footprints, and create a greener future for generations to come. Together, we can make a difference.
        </p>
        <button className="bg-green-600 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
