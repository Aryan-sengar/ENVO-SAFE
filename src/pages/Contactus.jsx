
const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center px-6 py-12 lg:px-8 mt-2 mb-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Contact Us
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Have any ideas for environmental sustainability? We would love to hear from you!
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

          <div>
            <label htmlFor="idea" className="block text-sm font-medium leading-6 text-gray-900">Your Idea for Environmental Sustainability</label>
            <div className="mt-2">
              <textarea
                id="idea"
                name="idea"
                rows="4"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
