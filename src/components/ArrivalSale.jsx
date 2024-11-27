import React from 'react'
import ProductCard from './common/productCard'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const ArrivalSale = () => {
  const ProductData = useSelector((state)=>state?.AllProducts.slice(0, 4))
 
  return (
    <div>
      <div className="flex flex-col gap-9 pb-20 border-b-2 border-gray max-w-[1200px] mx-auto my-8">
        <h1 className='font-bold text-[48px] text-center'>New Arrival</h1>
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

export default ArrivalSale
