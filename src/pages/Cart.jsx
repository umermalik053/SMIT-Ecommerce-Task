import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartProduct from "../components/common/CartProduct";
import FooterSubcontent from "../components/FooterSubcontent";
import { useNavigate } from "react-router";
import { auth, onAuthStateChanged } from "../Firebase/firebase";

const Cart = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        
       navigate("/SignUp")
      } 
    },[])
  })
  return (
    <div>
      <Header />
      <h1 className="text-4xl mt-9 text-Black font-bold max-w-[1200px] mx-auto ">
          Your Cart
        </h1>
      <CartProduct />
      
      
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
  );
};

export default Cart;
