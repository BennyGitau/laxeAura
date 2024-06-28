import React, { useEffect, useRef, useState } from "react";
import product from "../assets/demo.jpg";
import Layout from "../components/Layout";
import { fetchProduct } from "../utils/dataQuery";
import { Link, useParams } from "react-router-dom";
import { CountQuantity } from "../utils/dataStates";
import axios from "axios";

function Product() {
  const previous = useRef(null);
  const next = useRef(null);

  const { id } = useParams();

  const [productData, setProductData] = useState({});

  const { title, image, description, price, oldPrice } = productData;

  const { count, setCount } = CountQuantity();

  useEffect(() => {
    // console.log("Params: ", id);
    const data = fetchProduct(id);
    Promise.resolve(data).then((data) => setProductData(data));
    //console.log("RH_COUNT: ", count);
  }, [id]);
  function handleAddToCart() {
    axios.post("http://localhost:8000/cartItems", productData);
  }
  return (
    <Layout>
      {productData && (
        <div className="product w-full grid grid-cols-12 xl:mt-2">
          <div className="product-image col-span-7 h-full relative">
            <img
              loading="lazy"
              src={image ? image : product}
              alt={title ? title : "demo product"}
              className="w-full h-[calc(100vh-190px)] object-cover rounded-xl"
            />
            <div className="scroll-btns flex justify-between items-center px-4 absolute inset-x-0 top-1/2 -translate-y-1/2 text-3xl">
              {id >= 2 ? (
                <button ref={previous}>
                  <Link
                    to={
                      id === 1
                        ? `/products/${1}`
                        : `/products/${parseInt(id) - 1}`
                    }
                  >
                    ⬅️
                  </Link>
                </button>
              ) : (
                <span />
              )}
              {id > 39 ? null : (
                <button ref={next}>
                  <Link
                    to={
                      id === 1
                        ? `/products/${1}`
                        : `/products/${parseInt(id) + 1}`
                    }
                  >
                    ➡️
                  </Link>
                </button>
              )}
            </div>
          </div>
          <div className="product-info col-span-5 grid gap-3 mt-4 px-8">
            <div className="meta-data bg-slate-400 flex items-center h-fit w-fit px-2 py-[2.5px] rounded-full font-bold">
              <h3 className="text-[0.6785rem] inline-flex gap-1 items-center">
                <span>⭐ 4.5 </span>
                <span className="text-[0.5rem] text-slate-50">
                  (1345 Reviews)
                </span>
              </h3>
            </div>
            <div className="product-title grid gap-2">
              <h1 className="text-xl font-bold max-w-[15rem] leading-tight xl:text-3xl xl:max-w-xs">
                {title
                  ? title
                  : "An Awesome Beauty product for your perfect skin"}
              </h1>
              <span className="vendor text-xs">
                {"Vendor: Bespoke Products"}
              </span>
              <span className="item-code text-xs text-slate-600">
                Item Code: #345600E
              </span>
            </div>
            <div className="product-description space-y-2">
              <h4 className="uppercase text-gray-500 text-xs font-bold">
                Description
              </h4>
              <p className="text-xs max-w-xs">
                {description
                  ? description
                  : `The href attribute requires a valid value to be accessible.
                Provide a valid, navigable address as the href value.`}
              </p>
            </div>
            <div className="product-price border-t border-slate-300 space-y-2 py-2">
              <h4 className="uppercase text-gray-500 text-xs font-bold">
                Price
              </h4>
              <div className="price text-xl font-semibold flex justify-items-start items-center space-x-5">
                <span className="new-price  xl:text-3xl">
                  {price ? price : "$399"}
                </span>
                <span className="old-price px-1.5 text-sm text-slate-600 relative xl:text-base">
                  <span>{oldPrice ? oldPrice : "$540"}</span>
                  <span className="absolute h-[2px] bg-slate-500 w-full top-1/2 -translate-y-1/2 inset-x-0"></span>
                </span>
              </div>
            </div>
            <div className="product-button space-y-2">
              <h4 className="uppercase text-gray-500 text-xs font-bold">
                Quantity
              </h4>
              <div className="w-full h-fit flex justify-between items-center">
                <div className="quantity flex items-center h-full rounded-md space-x-1">
                  <span className="text-md flex items-center justify-center font-bold p-1 px-2 border rounded-md border-black">
                    {count ? count : 1}
                  </span>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="add flex items-center justify-center rounded-md p-1 border border-black bg-green-600 h-full"
                  >
                    ➕
                  </button>
                  <button
                    disabled={count <= 0 ? true : false}
                    onClick={() => setCount(count - 1)}
                    className="remove flex items-center justify-center p-1 rounded-md bg-red-600 h-full border border-black"
                  >
                    ➖
                  </button>
                </div>
                <Link to="/">
                <button
                  onClick={handleAddToCart}
                  className="bg-black text-sm hover:bg-green-700 duration-200 ease-out text-white w-fit py-2 px-4 rounded-md"
                >
                  Add to Cart
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Product;
