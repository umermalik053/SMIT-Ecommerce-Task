import React from "react";
import AddToCard from "./AddToCard";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartProduct = () => {
  const CartData = useSelector((state)=>state?.Cart)

  let priceCalculate = CartData.reduce((acc,curr)=>{

    if(curr.discount) {
      return (acc + curr.price + curr.discount )* curr.quantity
    } else {
      return (acc + curr.price + 0 ) * curr.quantity
    }
  },0)
  let discountCalculate = CartData.reduce((acc,curr)=>{
   if(curr.discount) {
      return (acc + curr.discount) * curr.quantity
    } else if (curr.quantity) {
      return (acc + 0) * quantity
    }
  },0)
  console.log(priceCalculate)
  const shipping = CartData.length ? 20 : 0
 
  return (
    <div>
      <div className=" max-w-[1200px] min-h-[70vh] h-auto mx-auto ">
        <div className="w-full h-full flex gap-8 mt-6 py-6">
          <div className="w-[60%] min-h-[400px] rounded-lg h-auto bg-[whitesmoke] px-8 pb-5">
            {CartData?.map((item,index)=>{
              return <AddToCard key={index} product={item} />
            })}
          </div>
          <div className="w-[37%]  min-h-[400px] rounded-lg h-[450px] bg-[whitesmoke] ">
            <h1 className="text-3xl p-8  text-Black font-bold">
              Order Summary
            </h1>
            <div className="flex flex-col gap-3 p-8">
              <span className="text-[gray] text-2xl">
                Subtotal
                <span className="float-right text-[black] font-bold">${priceCalculate}</span>
              </span>
              <div className="text-[gray] text-2xl">
                Discount <span className="float-right text-[red]">- ${  discountCalculate}</span>
              </div>
              <span className="text-[gray] text-2xl border-b-2 border-[gray] pb-5">
                Shipping Charges <span className="float-right">${CartData.length ? 20 : 0}</span>
              </span>
              <span className="text-[black] text-2xl my-4">
                Total<span className="float-right">${priceCalculate-discountCalculate+shipping }</span>
              </span>

              <NavLink to="/checkout"><button className="btn w-full rounded-[64px] bg-black text-white">
                Checkout
              </button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
