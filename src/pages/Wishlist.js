import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/WishList`)
      .then((res) => setWishlistItems(res.data));
  }, []);

  // Function to remove product from wishlist
  const removeFromWishlist = (itemId) => {
    axios.delete(`http://localhost:8000/WishList/${itemId}`).then((res) => {
      setWishlistItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    });
  };

  return (
    <Layout>
      <div className="wishlist-container  mt-5">
        <div className="cart-header w-full flex items-center justify-between pb-3">
          <h1 className="text-xl font-bold text-cyan-600">Your WishList</h1>
          <NavLink
            className="bg-green-600 text-sm font-semibold px-2 py-1 rounded-md"
            to="/cart"
          >
            Switch to Cart 🛒
          </NavLink>
        </div>
        <div className="w-full h-full">
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty</p>
          ) : (
            <div className="wishlist-items grid grid-cols-4 gap-5">
              {wishlistItems.map((item, index) => (
                <div
                  key={index}
                  className="wishlist-item grid grid-rows-2 gap-10 h-96 border border-gray-400 overflow-hidden rounded-md hover:border-cyan-400 hover:bg-cyan-50 duration-200 ease-out p-2"
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full rounded-md"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-base truncate font-bold border-b border-slate-950 pb-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 text-xs">{item.description}</p>
                    <p className="font-semibold">Price: ${item.price}</p>
                    <button
                      className="bg-slate-900 hover:bg-red-600 duration-200 ease-out border w-fit border-black text-sm text-white px-5 py-1.5 rounded-md"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Wishlist;
