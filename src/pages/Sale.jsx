import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import FooterSubcontent from '../components/FooterSubcontent'
import ProductCard from '../components/common/productCard'
import { useNavigate } from 'react-router'
import { auth, onAuthStateChanged } from '../Firebase/firebase'

const Sale = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/SignUp");
      }
    });
   
  }, []);
    const product = useSelector((state)=>state?.AllProducts)
    // onSale
    const ProductData = product.filter((item)=> item.onSale)
    // console.log(ProductData)
  return (
    <div>
    <Header />
    <h1 className='text-4xl font-bold text-center'>Sale</h1>
    <div className="flex flex-wrap max-w-[1200px] w-fit mx-auto gap-5 justify-center py-7">
      
      {ProductData.map((item)=>{
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

export default Sale
