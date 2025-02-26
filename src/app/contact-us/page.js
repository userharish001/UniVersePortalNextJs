import React from "react";

const Contact = () => {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-gray-600 mt-2">
          Fill out the form below and we'll get back to you as soon as possible or  <a href="tel:9499428306" className="noline">
            Call Us : 9499428306
          </a>
        </p>
      </div>

      <form
        className="bg-white shadow-lg rounded-lg p-6 md:p-8"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input type="hidden" name="access_key" value="9cbbd7d0-14de-4dcc-84ee-2b862f330233" />
        <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
        <input type="hidden" name="from_name" value="My Website" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              id="phone"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+1 (234) 56789"
              type="text"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 w-full md:w-auto"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
