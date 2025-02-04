import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
           
    const{products} = useContext(ShopContext);
    const [mainProducts, setMainProducts] = useState([]);



    useEffect(()=>{
        setMainProducts(products.slice(0,4));
    },[])
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={''} text2={'CATERGORIES'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>"Grow your dream garden with our hand-picked, lovingly nurtured flowers."</p>
      </div>




      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center gap-4 gap-y-6'>
        {
          mainProducts.map((item, index )=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} description={item.description} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
