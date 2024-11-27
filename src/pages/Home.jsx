import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BrandSection from "../components/BrandSection";
import { useDispatch } from "react-redux";
import { ProductAction } from "../Store/Action/ActionType";
import ArrivalSale from "../components/ArrivalSale";
import TopSelling from "../components/TopSelling";
import BrowseCategory from "../components/BrowseCategory";
import FooterSubcontent from "../components/FooterSubcontent";
import Customer from "../components/Customer";

const Home = () => {
  const dispatch = useDispatch();
  const ReduxProduct = async () => {
    // https://fakestoreapi.in/api/products
    const response = await fetch("https://fakestoreapi.in/api/products");
    const products = await response.json();

    dispatch({ type: ProductAction.product, payload: products?.products });
    console.log(response)
  };
  useEffect(() => {
    ReduxProduct();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <BrandSection />
      <ArrivalSale />
      <TopSelling />
      <BrowseCategory />
      <Customer/>

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

export default Home;
