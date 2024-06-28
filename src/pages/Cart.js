import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/cartItems")
      .then((res) => {
        setCartItems(res.data);
        calculateTotalPrice(res.data);
        calculateTotalQuantity(res.data);
      })
      .catch((error) =>
        console.error("Error could not find any item in cart", error)
      );
  }, []);

  const removeFromCart = (itemId) => {
    axios.delete(`http://localhost:8000/cartItems/${itemId}`).then((res) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
      calculateTotalPrice(cartItems.filter((item) => item.id !== itemId));
      calculateTotalQuantity(cartItems.filter((item) => item.id !== itemId));
    });
  };
  ///get prices for each item
  //add all the prices
  //update total price state
  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((acc, item) => (acc += item.price), 0);
    setTotalPrice(totalPrice);
  };

  const calculateTotalQuantity = (items) => {
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(totalQuantity);
  };
  const addToWishlist =(item)=>{
    axios.post(`http://localhost:8000/WishList`,item)
  }

  return (
    <Layout>
      <div className="cart-container mt-3">
        <div className="cart-header w-full flex items-center justify-between pb-3">
          <h1 className="text-xl font-bold text-cyan-600">
            Your Shopping Cart
          </h1>
          <NavLink
            className="bg-green-600 text-sm font-semibold px-2 py-1 rounded-md"
            to="/wishlist"
          >
            Switch to Wishlist 🌠
          </NavLink>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-4 gap-5">
            <div className="cart-items grid grid-cols-3 gap-4 col-span-3 col-start-1">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="cart-item flex flex-col gap-3 max-w-fit border p-2 border-cyan-300 rounded-md hover:bg-cyan-50 duration-300 ease-out"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-64 rounded-md"
                  />
                  <div className="cart-item-details space-y-2 w-full overflow-x-hidden">
                    <h3 className="text-base font-semibold border-b border-slate-900 w-fit pb-2 mb-1 truncate line-clamp-1">
                      {item.title}
                    </h3>
                    <div>
                      <p className="text-xs text-slate-600">
                        Price: {item.price}
                      </p>
                      <p className="text-xs pt-1 pb-3 text-slate-600">
                        Quantity: {item.quantity ? item.quantity : 1}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <button
                        className="bg-red-600 mb-2 border border-black text-sm text-white px-5 py-1.5 rounded-md hover:bg-red-600 duration-200 ease-out"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="bg-green-500 mb-2 border border-black text-sm text-white px-5 py-1.5 rounded-md hover:bg-red-600 duration-200 ease-out"
                        onClick={() => addToWishlist(item)}
                      >
                        Add to wishlist 💖
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-price text-sm text-slate-800 col-start-4 col-span-1 bg-gray-200 rounded-md p-2 ">
              <div className="pb-8">
                <h2 className="text-lg uppercase text-black font-bold border-b border-slate-950 pb-2 mb-2">
                  Total
                </h2>
                {/* taxes, shipping, discounts */}
                <p>Taxes: {cartItems.length === 0 ? 0 : "16%"}</p>
                <p>Shipping: {cartItems.length === 0 ? 0 : "$5"}</p>
                <p>Discount: {cartItems.length === 0 ? 0 : "$10"}</p>
                <p>
                  Quantity: {totalQuantity ? totalQuantity : cartItems.length}{" "}
                </p>
                <p className="font-bold py-2 border-t border-b mt-8 border-slate-950">
                  Total Price: ${totalPrice}{" "}
                </p>
              </div>
              <NavLink className="" to="/checkout">
                <button className="bg-black text-sm hover:bg-green-700 duration-200 ease-out text-white w-fit py-2 px-4 rounded-md">
                  Checkout ✅
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
