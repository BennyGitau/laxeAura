import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search({
  filteredProducts,
  setOpenSearch,
  openSearch,
  searchQuery,
  setSearchQuery,
}) {
  // const { id, title, description, category, image, price } = products;
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const resp = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchData(resp);
  }, [searchQuery, filteredProducts]);
  // console.log("SEARCH: ", openSearch);
  if (!openSearch) return null;
  return (
    <div className="w-full h-full absolute z-[122] inset-0 divide-y-2 divide-slate-300 bg-slate-50 flex space-y-5 flex-col items-start pt-40 px-10 xl:px-16">
      {searchQuery === "" ? (
        <p className="flex flex-col  items-center justify-center mb-20 space-y-10 ml-24 h-full text-slate-900 text-2xl font-semibold">
          <span className="text-9xl animate-pulse">🔎</span>
          <span>Awaitng your input</span>
        </p>
      ) : searchData.length > 0 ? (
        searchData.map((product) => (
          // eslint-disable-next-line
          <Link
            onClick={() => {
              setOpenSearch(false);
              setSearchQuery("");
            }}
            to={`/products/${product.id}`}
            key={product.id}
            className="w-full h-fit flex items-start space-x-10 py-2 hover:px-2 hover:bg-cyan-200 duration-100 ease-out"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 object-cover rounded-md"
            />
            <div className="grid">
              <h2 className="text-slate-900 text-xl font-bold mt-2 border-b border-cyan-600 pb-2">
                {product.title}
              </h2>

              <p className="text-slate-900 text-sm font-medium mt-2 line-clamp-2 max-w-xs">
                {product.description}
              </p>
            </div>
            <p className="text-slate-900 text-lg font-medium mt-2">
              ${product.price}
            </p>
          </Link>
        ))
      ) : (
        <p className="text-slate-900 text-2xl font-bold mt-2">
          No products found.
        </p>
      )}
    </div>
  );
}

export default Search;
