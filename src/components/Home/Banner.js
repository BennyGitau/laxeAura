import React from "react";
import demo3 from "../../assets/demo5.webp";
import demo4 from "../../assets/demo6.jpeg";
import banner1 from "../../assets/b1.webp";

function Banner() {
  return (
    <section className="h-[calc(100vh-230px)] mt-6 w-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="h-full w-full">
          <figure className="h-full w-full relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full flex items-center justify-between z-[60]">
              {/* <button>⬅️</button>
              <button>➡️</button> */}
            </div>
            <img
              src={banner1}
              alt="demo product"
              className="h-[calc(100vh-230px)] w-fit object-cover rounded-md"
            />
            <div className="absolute bottom-0 rounded-b-md left-0 h-1/2 w-full bg-black/5">
              <div className="flex flex-col px-8 pt-12 space-y-6 h-full">
                <h2 className="text-slate-50 bg-blend-difference text-xl font-bold uppercase border-b border-slate-50 pb-4">
                  The Essence of Luxury & Elegance
                </h2>
                <div className="flex gap-4 font-semibold">
                  <button className="bg-white whitespace-nowrap  text-black px-3 py-1.5 rounded-sm">
                    Shop Perfumes
                  </button>
                  <button className="bg-white whitespace-nowrap  text-black px-3 py-1.5 rounded-sm">
                    Shop Jewelry
                  </button>
                  <button className="bg-white whitespace-nowrap  text-black px-3 py-1.5 rounded-sm">
                    Shop Others
                  </button>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <div className="grid grid-rows-2 h-full w-full">
          <div className="h-full w-full">
            <div className="certified w-fit uppercase font-bold mt-4 px-3 py-1.5 border border-slate-700 rounded-md text-xs">
              <span>👍Globally certified</span>
            </div>
            <h1 className="translate-y-12 xl:translate-y-5 text-4xl xl:text-6xl py-4 font-bold text-slate-900">
              Re-imagining your shopping experience
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <figure className="flex items-end h-full w-full">
              <img
                src={demo4}
                alt="demo product"
                className="h-40 rounded-md w-full"
              />
            </figure>
            <figure className=" rounded-md w-full">
              <img
                src={demo3}
                alt="demo product"
                className="h-40 rounded-md w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
