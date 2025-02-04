import React from 'react'
import ContactForm from '../components/ContactForm'
import { assets } from '../assets/assets'
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen contact flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-[400px]">
            <img
              src={assets.contact} // Replace with the actual image URL
              alt="Decorative"
              className="w-full h-full object-cover rounded-xl md:rounded-none"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
