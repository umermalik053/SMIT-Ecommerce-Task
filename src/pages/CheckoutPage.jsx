import React from "react";
import Checkout from "../components/CheckOut/Checkout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterSubcontent from "../components/FooterSubcontent";

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto">
      <Checkout />
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
  );
};

export default CheckoutPage;
