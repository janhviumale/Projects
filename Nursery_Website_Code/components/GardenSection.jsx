import React from 'react';
import { assets } from '../assets/assets';

const GardenSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 bg-white">
            {/* Left Image */}
            <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8">
                <img className="w-full max-w-xs rounded-lg shadow-md" src={assets.Gardening} alt="Gardener working" />
            </div>

            {/* Main Content */}
            <div className="lg:max-w-md mb-6 lg:mb-0 lg:pt-20">
                <h2 className="text-5xl font-bold text-green-700 space-y-24">25</h2>
                <p className="text-gray-500 text-sm">Year of Experience</p>
                <h1 className="text-3xl font-bold text-green-800 mt-2">
                    We Make Your Home Like A Garden
                </h1>
                <p className="text-gray-600 mt-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                </p>
                <button className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                    Explore More
                </button>
            </div>

            {/* Features */}
            <div className="flex flex-row lg:flex-col items-center lg:space-x space-y-0 lg:space-y-10 lg:ml-8 ">
                <div className="flex flex-col items-center text-center space-y-2 border-l border-gray-300 p-4">
                    <img src={assets.Award} alt="Award Icon" className="w-[100px] h-[100px]" />
                    <h3 className="text-xl font-semibold text-green-800">Award Winning</h3>
                    <p className="text-gray-600">
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                    </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-4 border-l border-gray-300 p-4">
                    <img src={assets.Team} alt="Team Icon" className="w-[100px] h-[100px]" />
                    <h3 className="text-xl font-semibold text-green-800">Dedicated Team</h3>
                    <p className="text-gray-600">
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                    </p>
                </div>
            </div>






        </div>
    );
};

export default GardenSection;
