import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import ProductCard from '../components/common/productCard';
import Footer from '../components/Footer';
import FooterSubcontent from '../components/FooterSubcontent';

const CategoryPage = () => {
    
  const ProductData = useSelector((state) =>state?.AllProducts)

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); 

    const location = useLocation();
    const passedState = location.state;
   const filterCat = ProductData.filter((item)=> item.category == passedState)
   
   
  return (
    <div>
      <Header/>
      
      <h1 className='text-4xl font-bold text-center'>Products</h1>
      <div className="flex flex-wrap justify-center gap-5 max-w-[1200px] mx-auto my-5">
      { passedState == "all" ? ProductData.map((item)=>{
          return <ProductCard key={item.id} product={item} />
        }) : filterCat.map((item)=>{
          return <ProductCard key={item.id} product={item} />
        })}
      </div>
      <div
        className="bg-white rounded mt-56   "
        style={{ boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        <Footer />
        <div className="w-[1150px] h-[200px] bg-black mx-auto mt-[-410px] rounded-lg">
       <FooterSubcontent/>
      </div>
      </div>
    </div>
  )
}

export default CategoryPage
