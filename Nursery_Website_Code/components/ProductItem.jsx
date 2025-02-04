// ProductItem.js
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, description, price }) => {
    const { currency } = useContext(ShopContext)

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='transform hover:scale-105 transition-transform duration-300 w-[250px] h-[300px] object-cover' src={image[0]} alt="" />
            </div>
            <p className='pt-3 px-2 pb-1 text-lg font-medium text-center'>{name}</p>
            <p className='text-pb-1 px-5 text-sm text-center'>{description}</p>
            {/* Only display price and currency if price is provided */}
            {price && <p className='text-sm font-medium text-center'>{currency}{price}</p>}
        </Link>
    )
}

export default ProductItem
