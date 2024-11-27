import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Detail from '../components/Detail'
import FooterSubcontent from '../components/FooterSubcontent'
import Footer from '../components/Footer'

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const {id}=useParams()
    const selector = useSelector((state)=>state?.AllProducts)
    const Product = selector.find((item)=> item.id == id)
  
  return (
    <div className='' >
      <Header/>
      <Detail detail={Product}/>
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

export default ProductDetail
