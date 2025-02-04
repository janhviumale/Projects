// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">We’re Here to Help You</h2>
      <p className="text-gray-500 mb-6">
      Have questions or need more details on our services and pricing? We’re happy to assist – get in touch today!
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 border border-gray-200 rounded-lg outline-none focus:border-gray-400"
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="w-full p-4 border border-gray-200 rounded-lg outline-none focus:border-gray-400"
        />
        <textarea
          placeholder="Message"
          className="w-full p-4 border border-gray-200 rounded-lg outline-none focus:border-gray-400 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-4 bg-[#759867] text-white font-semibold rounded-lg hover:bg-pink-950 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
