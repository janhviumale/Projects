
import React from 'react'
import { assets } from '../assets/assets'

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:space-x-12 p-20 bg-white">
      {/* Left Section: Title, Description, Button */}
      <div className="mb-10 lg:mb-0 mt-0 lg:mt-14 lg:max-w-md">
        <h3 className="text-lg font-semibold text-green-600 mb-2">Why Choosing Us!</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-4">Few Reasons Why People Choosing Us!</h2>
        <p className="text-gray-600 mb-6">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
          Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>
        <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
          Explore More
        </button>
      </div>

      {/* Right Section: Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <img src={assets.Tick} alt="" className='w-[80px] h-auto'/>
          <h4 className="text-xl font-semibold text-green-800 pt-2">100% Satisfaction</h4>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <img src={assets.Dedicated} alt="" className='w-[80px] h-auto'/>
          <h4 className="text-xl font-semibold text-green-800 pt-2">Dedicated Team</h4>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <img src={assets.Tools} alt="" className='w-[80px] h-auto'/>
          <h4 className="text-xl font-semibold text-green-800 pt-2">Modern Equipment</h4>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <img src={assets.Medal} alt="" className='w-[80px] h-auto'/>
          <h4 className="text-xl font-semibold text-green-800 pt-2">Quality Control</h4>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
