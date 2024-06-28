import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { CountCart, CountWishList } from "../../utils/dataStates";

function ProductCard({ product, addToCart, addToWishlist }) {
  const { id, title, price, image, description, isNew, oldPrice } = product;
  const card = useRef(null);

  const { count: cartCount, setCount: setCartCount } = CountCart();
  const { count: wishListCount, setCount: setWishListCount } = CountWishList();

  useEffect(() => {
    if (card.current) {
      card.current.addEventListener("mouseenter", () => {
        card.current.classList.add("scale-105");
      });
      card.current.addEventListener("mouseleave", () => {
        card.current.classList.remove("scale-105");
      });
    }
  }, []);

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    setCartCount(cartCount + 1);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product); // Add product to wishlist
    setWishListCount(wishListCount + 1);
  };

  return (
    <div className="h-[25rem] xl:h-[26rem] w-full rounded-lg shadow-lg hover:drop-shadow-xl shadow-slate-200 drop-shadow-md bg-gradient-to-br from-cyan-50 to-orange-50">
      <div className="flex flex-col gap-2 pb-2 h-full justify-between">
        <NavLink
          to={`/products/${id}`}
          id={id}
          ref={card}
          className="flex flex-col overflow-hidden relative rounded-md will-change-transform duration-500 ease-out"
        >
          <img
            src={image}
            alt={title} // Use title as alt text
            className="h-80 xl:h-72 w-full rounded-md object-cover object-center"
          />
          {isNew === true && (
            <span className="absolute top-[54px] xl:top-10 z-10 h-fit py-2 w-fit px-4 rounded-r-md bg-black text-white text-xs font-semibold">
              New
            </span>
          )}
        </NavLink>
        <div className="price flex items-center -mt-6 space-x-1 relative z-20 px-4 bg-yellow-400 w-4/5 rounded-r-2xl py-2">
          <h1 className="text-lg font-bold">${price}</h1>
          {oldPrice && (
            <p className="text-[10px] font-semibold to-gray-300 relative px-1.5">
              <span className="h-[1.5px] w-full absolute top-1/2 -translate-y-[70%] inset-x-0 bg-gray-500 rounded-full" />
              <span>${oldPrice} Off</span>
            </p>
          )}
        </div>
        <div className="description px-4 pb-3">
          <h1 className="text-lg font-bold line-clamp-1 truncate">{title}</h1>
          <span className="h-[2px] inline-flex bg-slate-500 w-24 rounded-2xl" />
          <p className="text-xs leading-tight max-w-[12rem] line-clamp-2 text-gray-500">
            {description}
          </p>
        </div>
        <div className="button flex items-center justify-between px-4">
          <button
            onClick={handleAddToCart} // Call handleAddToCart function here
            className="bg-black text-sm hover:bg-green-700 duration-200 ease-out text-white w-fit py-2 px-4 rounded-md"
          >
            🛒
          </button>
          <button
            onClick={handleAddToWishlist} // Call handleAddToWishlist function here
            className="border text-slate-900 hover:text-white hover:bg-purple-950 duration-200 ease-out border-black h-fit text-xs w-fit py-2 px-4 rounded-md"
          >
            Add to Wishlist 💖
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
