import React from 'react'
import { assets } from '../assets/assets'
import "./Hero.css";

const Hero = () => {
    return (
        
        <div className='hero flex flex-col sm:flex-row'>
            {/* hero Left Side */}
            <div className='w-full sm:w-3/4 flex items-center justify-center py-10 sm:py-0 px-10'>
                <div className='text-[#414141]'>
                    {/* <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>Best Variety of Plants for your House</p>
                    </div> */}
                    <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Best Variety of Plants for your House</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* hero Right Side */}
            <img className='w-full sm:w-1/2' src={assets.landing} alt="" />
        </div>
    )
}

export default Hero
