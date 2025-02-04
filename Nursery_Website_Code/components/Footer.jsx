import React from 'react';

const Footer = () => {
  return (
    <div className='py-10'>
      <footer className="bg-gray-50 rounded-lg shadow-lg py-12 px-10 font-sans tracking-wide w-full">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Newsletter</h3>
          <p className="text-sm mt-6 text-gray-500">
            Subscribe to our newsletter and stay up to date with the latest news,
            updates, and exclusive offers. Get valuable insights. Join our community today!
          </p>

          <div className="bg-white flex px-2 py-1.5 rounded-full text-left mt-10 w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm pl-4 py-2 rounded-l-full"
            />
            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white text-sm rounded-full px-5 py-2.5 ml-4 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
