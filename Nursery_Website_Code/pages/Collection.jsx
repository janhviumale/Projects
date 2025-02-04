import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useEffect } from 'react'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) { //If the category array contains at least one element, 'if' will execute.
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

    useEffect(() => {
      setFilterProducts(products);
    }, [])

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options*/}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-5 sm:hidden transform transition-transform duration-300 ${showFilter ? 'rotate-180' : ''}`} src={assets.Arrow} alt="" />
        </p>

        {/*Catergory Filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mb-10 mt-3 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATERGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Artifical'} onChange={toggleCategory} />Artifical
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Gardernia'} onChange={toggleCategory} />Gardernia
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Lavender'} onChange={toggleCategory} />Lavender
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Rose'} onChange={toggleCategory} />Rose
            </p>
          </div>
        </div>

      </div>

      {/*Right Side*/}
      <div className='flex-1 mb-14'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/*Product Sort*/}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map Products*/}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>


      </div>


    </div>
  )
}

export default Collection
