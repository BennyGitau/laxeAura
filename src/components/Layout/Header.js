import { NavLink } from "react-router-dom";
import { CountCart, CountWishList } from "../../utils/dataStates";

function Header({ handleSearch, openSearch, setOpenSearch, searchQuery }) {
  const { count: cartItems } = CountCart();
  const { count: wishlistItems } = CountWishList();
  // console.log("HED: ", cartItems, wishlistItems);
  return (
    <header className="h-fit w-full xl:pb-2 bg-slate-50">
      <div className="h-[50px] fixed inset-x-0 top-0 z-[999] flex items-center justify-start bg-[#79559d]">
        <div className="running-header animate-marquee flex space-x-3 w-full py-3 text-white">
          <h1 className="text-sm whitespace-nowrap font-bold">
            <span className="px-2">🎁</span> Hurry Up! Get your favorite
            products Now!
          </h1>
          <h1 className="text-sm whitespace-nowrap font-bold">
            <span className="px-2">🎁</span> Hurry Up! Get your favorite
            products Now!
          </h1>
          <h1 className="text-sm whitespace-nowrap font-bold">
            <span className="px-2">🎁</span> Hurry Up! Get your favorite
            products Now!
          </h1>
          <h1 className="text-sm whitespace-nowrap font-bold">
            <span className="px-2">🎁</span> Hurry Up! Get your favorite
            products Now!
          </h1>
        </div>
      </div>
      <div className="py-2 bg-slate-50 fixed inset-x-0 top-[50px] z-[999] flex justify-between items-center w-full px-10 xl:px-16">
        <div className="logo flex items-center gap-3 text-lg font-bold">
          <NavLink to="/">
            <h2>LuxeAura</h2>
          </NavLink>
          <div className="search relative flex items-center gap-1 w-fit h-fit">
            <input
              onChange={handleSearch}
              onClick={() => setOpenSearch(!openSearch)}
              type="text"
              value={searchQuery}
              placeholder="Search products..."
              className="w-[320px] xl:w-[540px] text-[12px] xl:text-sm font-medium bg-cyan-100 outline-none border-slate-500 py-2 rounded-md pl-10 focus:outline-1"
            />
            <span className="absolute top-1/2 left-2 -translate-y-1/2 group-hover:animate-pulse">
              🔍
            </span>
            {openSearch && (
              <button
                onClick={() => setOpenSearch(!openSearch)}
                className="absolute top-1/2 right-2 -translate-y-1/2 hover:bg-slate-500 px-1 py-[2px] duration-300 ease-out rounded-md inline-flex items-center justify-center text-base"
              >
                ❌
              </button>
            )}
          </div>
        </div>
        <div className="cart_search flex items-center gap-2 group">
          <NavLink to={"/wishlist"} className="cart">
            <button
              // onClick={() => setCartOpen(!cartOpen)}
              className="text-xl relative"
            >
              <span>💖</span>
              <span className="text-[10px] absolute -top-3 right-0">
                {wishlistItems}
              </span>
            </button>
          </NavLink>
          <NavLink to={"/cart"} className="cart">
            <button
              // onClick={() => setCartOpen(!cartOpen)}
              className="text-xl relative"
            >
              <span>🛒</span>
              <span className="text-[10px] absolute -top-3 right-0">
                {cartItems}
              </span>
            </button>
          </NavLink>
          {/* Fix Link to checkout */}
          <NavLink to={"/checkout"} className="checkout">
            <button
              // onClick={() => setCartOpen(!cartOpen)}
              className="text-sm font-semibold px-4 py-2 border border-slate-900 rounded-md outline-none"
            >
              Checkout
            </button>
          </NavLink>
          <div className="login">
            <button
              // onClick={() => setCartOpen(!cartOpen)}
              className="text-sm font-semibold px-4 py-2 bg-slate-950 text-teal-50 border border-slate-900 rounded-md outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="inline-flex fixed inset-x-0 top-[103px] z-[999] h-[1.5px] w-full px-10 xl:px-16 bg-slate-300"></div>
    </header>
  );
}

export default Header;
