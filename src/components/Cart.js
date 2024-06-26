import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const grandTotal = useSelector((store) => store.cart.grandTotal);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.clear();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <div className="text-center m-4 p-4">
    //   <h1 className="font-bold text-xl">Cart</h1>
    //   <div className="w-full xs:w-2/3 sm:w-1/2 m-auto pb-12">
    //     <button
    //       className="p-2 m-4 bg-black text-white rounded-lg"
    //       onClick={handleClearCart}
    //     >
    //       Clear Cart
    //     </button>
    //     {cartItems.length === 0 && <h1>Cart is empty, Add Item to cart</h1>}
    //     <MenuItemList items={cartItems} addBtn={false} />

    //     {cartItems.length !== 0 && (
    //       <div className="flex justify-between mt-4 p-4 border border-orange-100 rounded-lg">
    //         <p className="p-2 font-bold text-lg text-red-700">
    //           Grand Total : {grandTotal}
    //         </p>
    //         <button className="p-2 font-bold bg-slate-50 text-red-700 border-gray-200 border-2 rounded-lg shadow-lg">
    //           <Link to="/payment">Place Order</Link>
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="text-center mx-auto p-4 smallM:px-0 w-[100%] mt-[7rem]">
      {cartItems.length === 0 ? (
        <div className="w-[100%] h-[50vh] mb-[3rem] flex flex-col gap-[1rem] mt-[3rem]">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt=""
            className="w-[280px] h-[75%] mx-auto"
          />
          <p className="flex flex-col text-gray-600">
            <span className="font-bold text-lg">Your cart is empty</span>
            <span className="text-gray-500">
              You can go to the home page to view more restaurants
            </span>
          </p>
          <button className="bg-[#dc2626] px-4 py-2 my-2 mx-auto font-semibold text-white uppercase">
            <NavLink to="/">See restaurants near you</NavLink>
          </button>
        </div>
      ) : (
        <div className="flex flex-col bg-gray-100 p-4">
          <div className="desktop:w-[50%] laptop:w-[60%] tablet:w-[70%] mobile:w-[90%] smallM:w-[100%] mx-auto relative mb-[3rem]">
            {/* <p className="w-[100%] bg-white px-[2rem] py-[0.8rem] text-gray-800 font-medium text-lg text-left border-b-2 border-gray-100">
              {itemCount[0].restName}'s Order
            </p> */}
            <MenuItemList items={cartItems} addBtn={false} />
            <div className="flex justify-between mt-4 p-4 border border-orange-100 rounded-lg">
              <p className="p-2 font-bold text-lg text-red-700">
                Grand Total : {grandTotal}
              </p>

              <button
                className="p-2 font-bold bg-slate-50 text-red-700 border-gray-200 border-2 rounded-lg shadow-lg"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button className="p-2 font-bold bg-slate-50 text-red-700 border-gray-200 border-2 rounded-lg shadow-lg">
                <Link to="/payment">Place Order</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
