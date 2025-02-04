import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*Product Data*/}
      <div className='flex gap-12 flex-col sm:flex-row'>

        {/*Product Images*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='w-full sm:w-[85%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Product Information*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.Star} className='w-3 5' alt="" />
            <img src={assets.Star} className='w-3 5' alt="" />
            <img src={assets.Star} className='w-3 5' alt="" />
            <img src={assets.Star} className='w-3 5' alt="" />
            <img src={assets.Star_dull} className='w-3 5' alt="" />
            <p className='pl-2'>(146)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <button onClick={()=>addToCart(productData._id)} className='bg-black text-white px-8 py-3 my-10 text-sm active:bg-gray-700'>ADD TO CART</button>
          
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
