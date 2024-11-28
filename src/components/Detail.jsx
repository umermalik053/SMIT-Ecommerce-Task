import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from "../Store/Action/ActionType";
import { IoFilterOutline } from "react-icons/io5";
import ReviewCard from "./common/ReviewCard";
import Faqs from "./Faqs";
import ProductCard from "./common/productCard";
import { auth, onAuthStateChanged } from "../Firebase/firebase";
import { useNavigate } from "react-router";

const Detail = ({ detail }) => {
  const [showToast, setShowToast] = useState(false);
  const ProductData = useSelector((state)=>state?.AllProducts.slice(28, 32))
  const [activeTab, setActiveTab] = useState("Rating&Review");
  const navigate = useNavigate()


  const tabs = [
    { id: "ProductDetail", label: "Product Detail", content: detail },
    {
      id: "Rating&Review",
      label: "Rating & Review",
      content: [
        {
          name: "Umar Malik",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 16 , 2024",
        },
        {
          name: "Bilal Memon",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 20 , 2024",
        },
        {
          name: "Wasi Khatri",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 1 November , 2024",
        },
        {
          name: "Mubashir Ali",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 4 November , 2024",
        },
        {
          name: "Faizan Ali",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 20 , 2024",
        },
        {
          name: "Sir Sadiq Shah",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 25 , 2024",
        },
      ],
    },
    { id: "FAQs", label: "FAQ", content: [
      {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition."
      },
      {
        question: "How long does shipping take?",
        answer: "Standard shipping takes 5-7 business days, while expedited shipping options are available for faster delivery."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. Shipping costs and times vary depending on the destination."
      },
      {
        question: "How can I track my order?",
        answer: "You can track your order using the tracking link provided in the confirmation email or by logging into your account."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, PayPal, and other secure payment options."
      },
      {
        question: "Can I change or cancel my order?",
        answer: "Orders can be changed or canceled within 24 hours of placing them by contacting our customer service team."
      },
      {
        question: "Do you offer discounts for bulk orders?",
        answer: "Yes, we offer discounts for bulk purchases. Please contact us for more details."
      }
    ] },
  ];

  const [count, setCount] = useState(0);
  const Dispatch = useDispatch();
  const addToCart = (Data) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        // Dispatch({type: ProductAction.Add_Cart, payload: Data})
        Dispatch({ type: ProductAction.Add_Cart, payload: Data });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
        // ...
      } else {
        // User is signed out
        // ...
        navigate('/signUp')
      }
    })
    // Dispatch({ type: ProductAction.Add_Cart, payload: Data });

    // setShowToast(true);
    // setTimeout(() => setShowToast(false), 3000);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="max-w-[1200px] h-auto  mx-auto  ">
      <div className="mt-8 flex">
        <div className="w-[50%] h-auto  flex items-center justify-center">
          <img className="w-[100%]" src={detail.image} alt="" />
        </div>
        <div className="w-[50%] h-full">
          <h1 className="text-3xl font-extrabold pl-4 pt-4">
            {detail.title.slice(0, 30)}...
          </h1>
          <div className="pl-4 pt-3 rating">
            <input
              disabled
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              disabled
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
              defaultChecked
            />
            <input
              disabled
              defaultChecked
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              disabled
              defaultChecked
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
            />
            <input
              disabled
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-yellow-500"
            />{" "}
            <span className="pl-2 text-[gray]">4.5/5</span>
          </div>
          <p className="text-4xl font-bold text-gray-600 pl-4 pt-3">
            Price: ${detail.price}
            {detail.discount ? (
              <span className="text-[#00000066] line-through ml-2">
                ${detail.price + detail.discount}
              </span>
            ) : null}
          </p>
          <p className=" pl-4 pt-3 text-[#00000099]">
            {detail.description.slice(0, 120)}...
          </p>
          <h2 className="text-xl text-[#00000099] pl-4 pt-3">Select Color</h2>
          <div className="flex pl-4 pt-3 gap-4">
            <div className=" w-[40px] h-[40px] rounded-full bg-[#314F4A]"></div>
            <div className=" w-[40px] h-[40px] rounded-full bg-[#31344F]"></div>
            <div className=" w-[40px] h-[40px] rounded-full bg-[lightgray]"></div>
          </div>
          <h2 className="text-xl text-[#00000099] pl-4 pt-3">Choose Size</h2>
          <div className="flex pl-4 pt-3 gap-4">
            <div className=" px-8 py-2 rounded-full bg-[#F0F0F0] btn btn-ghost">
              Small
            </div>
            <div className=" px-8 py-2  rounded-full bg-[#F0F0F0] btn btn-ghost">
              Medium
            </div>
            <div className=" px-8 py-2 rounded-full bg-[#F0F0F0] btn btn-ghost">
              Large
            </div>
          </div>
          <div className="flex w-[100%] h-[50px] gap-6  pl-4 mt-9">
            <div className="flex items-center gap-7 px-6 py-7 bg-[#F0F0F0] rounded-[40px] ">
              <button onClick={increment} className="text-3xl mt-[-8px]">
                +
              </button>
              <h2 className="text-3xl">{count}</h2>

              <button onClick={decrement} className="text-3xl mt-[-8px]">
                -
              </button>
            </div>
            <div className="flex items-center gap-7 px-32 py-7 bg-[black] text-white rounded-[40px]">
              <button onClick={() => addToCart(detail)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-9">
        <div className="max-w-[1200px] mx-auto mt-10">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-center py-2 px-4 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="p-4 bg-white shadow mt-4 rounded-lg py-5">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="text-gray-700">
                    {tab.id == "ProductDetail" ? (
                      <div className="">
                        <h2 className="text-3xl font-bold">{tab.content.title}</h2>
                        <p className="mt-10 text-md text-gray-400">
                          {" "}
                          <span className="font-bold text-xl">
                            {" "}
                            Description:{" "}
                          </span>
                          {tab.content.description}
                        </p>
                        <p className="mt-10 text-2xl text-gray-600 ">
                          {" "}
                          <span className="font-bold text-xl">Brand:</span>{" "}
                          {tab.content.brand}
                        </p>
                        <p className="mt-2 text-2xl text-gray-600 ">
                          {" "}
                          <span className="font-bold text-xl">
                            Model:{" "}
                          </span>{" "}
                          {tab.content.model}
                        </p>
                        <p className="mt-2 text-2xl text-gray-600 ">
                          <span className="font-bold text-xl">Color:</span>{" "}
                          {tab.content.color}
                        </p>
                        <h2 className="text-4xl pt-6 font-extrabold">
                          Price:{" "}
                          <span className="text-[#a9a9a9]">${tab.content.price}</span>
                        </h2>
                      </div>
                    ) : tab.id == "Rating&Review" ? (
                      <div className="">
                        <div className="flex justify-between">
                          <h1 className="text-2xl font-bold">
                            All Reviews{" "}
                            <span className="text-[#d4d4d4] font-semibold text-xl">
                              (450)
                            </span>
                          </h1>
                          <div className="flex gap-4 items-center justify-center">
                            <button className="text-sm bg-[#F0F0F0] px-3 py-3 rounded-full">
                              <IoFilterOutline />
                            </button>
                            <select
                              id="sort"
                              name="sort"
                              class="mt-2 block w-full px-5 py-2 bg-[#F0F0F0] rounded-full border outline-none  shadow-sm  sm:text-sm"
                            >
                              <option value="latest" selected>
                                Latest
                              </option>
                              <option value="popular">Popular</option>
                              <option value="oldest">Oldest</option>
                            </select>
                            <button className="px-5 py-2 text-nowrap bg-black text-white rounded-full">
                              Write a Review
                            </button>
                          </div>
                        </div>
                        <div className="mt-[20px] flex gap-2 flex-wrap justify-center">
                          {tab.content.map((item) => {
                            return <ReviewCard data={item} />;
                          })}
                        </div>
                      </div>
                    ) : tab.id == "FAQs" ? (
                      <div className=" flex flex-col gap-2">
                        {
                          tab.content.map((item , index)=>{
                            return <Faqs key={index} data={item}/>
                          })
                        }
                      </div>
                    ) : null}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="">
      <h1 className='font-bold text-[40px] text-center'>YOU MIGHT ALSO LIKE</h1>
      <div className="flex justify-center  gap-4 flex-wrap mt-9">
      {showToast && (
        <div className="alert alert-success bg-[#e4e4e4] fixed top-8 right-0 shadow-lg w-fit font-bold ">
          <span>🎉 Success! Product has been added to your cart.</span>
        </div>
      )}
      {ProductData.map((item)=>{
          return <ProductCard key={item.id} product={item} onClick={()=>window.scrollTo(0, 0)} />
        })}
      </div>
     
      </div>
    </div>
  );
};

export default Detail;
