import React, { useState, useEffect } from "react";

function Filters({ products, setFilteredProducts }) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceFilter, setPriceFilter] = useState(10000);

  useEffect(() => {
    // Set filteredProducts to all products when the component mounts
    setFilteredProducts(products);
  }, [products, setFilteredProducts]);

  const applyFilters = () => {
    let filteredProducts = products.filter((product) => {
      // Check if the product's category matches the selected category
      if (
        selectedCategory !== "All Categories" &&
        product.category !== selectedCategory
      ) {
        return false;
      }
      // Apply price filter
      if (product.price > priceFilter) {
        return false;
      }
      return true;
    });

    setFilteredProducts(filteredProducts);
  };

  function filterProducts(category) {
    const filtered = products.filter((product) => {
      return category === "All Categories"
        ? true
        : product.category === category;
    });
    setFilteredProducts(filtered);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
    filterProducts(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPriceFilter(parseFloat(e.target.value));
    applyFilters(); // whenever price changes we apply filters
  };
  // Assuming categories are derived from products, if not, you need to derive them first
  const categories = [
    "All Categories",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="filters w-full flex items-center justify-between h-full pt-6 text-sm">
      <div className="flex space-x-2">
        {/*Used a dropdown for category filters */}
        {/* <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select> */}
        {categories.map((category, index) => (
          <div key={index} className="category">
            <button
              onClick={handleCategoryChange}
              value={category}
              className="text-md hover:bg-green-600 hover:text-white duration-200 ease-out font-semibold px-2 py-2 border border-slate-800 rounded-md whitespace-nowrap"
            >
              {category}
            </button>
          </div>
        ))}
      </div>
      {/* Price filter */}
      <div className="price flex space-x-3 font-semibold items-center">
        <h1 className="text-lg font-semibold">Price</h1>
        <span>$0</span>
        <input
          type="range"
          min={0}
          max={27000}
          value={priceFilter}
          onChange={handlePriceChange}
          className="w-full bg-slate-300 outline-none py-1.5 rounded-sm px-2 font-semibold text-sm"
        />
        <span>${priceFilter}</span>
      </div>
    </div>
  );
}

export default Filters;
