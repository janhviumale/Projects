import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 10)); // Show up to 10 items for example
  }, [products]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bestSeller.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= bestSeller.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={'FEATURED'} text2={'PLANTS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        "Grow Your Garden – See Our Featured Plants Collection!"
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          &#8592; {/* Left arrow symbol */}
        </button>

        {/* Display 5 product items at a time with smooth transition */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / 2)}%)`,
            }}
          >
            {bestSeller.map((item, index) => (
              <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 mx-5">

                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          &#8594; {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
