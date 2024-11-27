import React from 'react'
import ProductCard from './common/productCard'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const TopSelling = () => {
    const ProductData = useSelector((state)=>state?.AllProducts.slice(9, 13))
    console.log(ProductData)
 
    return (
      <div>
        <div className="flex flex-col gap-9 pb-20 max-w-[1200px] mx-auto my-9">
          <h1 className='font-bold text-[48px] text-center'>Top Selling</h1>
          <div className=" flex justify-center  gap-4 flex-wrap ">
          {ProductData.map((item)=>{
            return <ProductCard key={item.id} product={item} />
          })}
          </div>
          <NavLink to="/product" className="flex justify-center">
          <button className='text-xl border border-[#a09f9f] max-w-[200px] min-w-[150px] py-2 rounded-full bg-[#f8f8f8]'>View All</button>
       
          </NavLink>
         </div>
      </div>
    )
}

export default TopSelling
