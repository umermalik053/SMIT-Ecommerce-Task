import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const Cart = useSelector((state) => state?.Cart);
  console.log(Cart);
  const ReducePrice = Cart.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

  return (
    <div className="navbar bg-base-100 max-w-[1200px] mx-auto py-3 flex justify-between">
      <div className="flex">
        <NavLink to="/">
          <h1 className="font-extrabold text-3xl">SHOP.CO</h1>
        </NavLink>
        <div className=" bg-[#ececec] w-[500px] h-10 rounded-[64px] px-6 ml-10 flex items-center gap-3">
          <FaSearch className="text-3xl text-[#b0b0b0]" />
          
        <input type="text" placeholder="Search for product" className="bg-[#ececec] w-[500px] h-10 border-none outline-none" />
        </div>
        
      </div>
      <div className="navbar-center flex max-w-[330px] ">
        <ul className="menu  menu-horizontal block sm:menu-horizontal sm:hidden  md:menu-horizontal xs:menu-xs bg-base-100 navbar-center lg:menu-horizontal rounded-box">
          <NavLink to="/">
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to="/product">
            <li>
              <a>Product</a>
            </li>
          </NavLink>
          <NavLink to="/sale">
            <li>
              <a>Sale</a>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <a>Contact</a>
            </li>
          </NavLink>
        </ul>
        <div className="dropdown dropdown-bottom sm:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
           <NavLink to="/">
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to="/product">
            <li>
              <a>Product</a>
            </li>
          </NavLink>
          <NavLink to="/sale">
            <li>
              <a>Sale</a>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <a>Contact</a>
            </li>
          </NavLink>
          </ul>
        </div>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {Cart.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{Cart.length} items:</span>
              <span className=" text-[#8c8c8c]">Subtotal: ${ReducePrice}</span>
              <div className="card-actions">
                <NavLink to="/Cart" className="btn btn-block bg-[#F0F0F0]">
                  View cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
