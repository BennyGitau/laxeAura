import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { fetchProducts } from "../../utils/dataQuery";
import Search from "./Search";

function Layout({ children }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [count, setCount] = useState(0);

  const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // console.log("SEARCHQUERY ", searchQuery);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
    // console.log(products);
  }, []);

  return (
    <div className="h-full w-full flex flex-col justify-between">
      <Header
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Search
        searchQuery={searchQuery}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        setSearchQuery={setSearchQuery}
        filteredProducts={filteredProducts}
      />
      <Main
        products={products}
        filteredProducts={filteredProducts}
        cartItems={cartItems}
        setCartItems={setCartItems}
        children={children}
        count={count}
        setCount={setCount}
      />
      <Footer />
    </div>
  );
}

export default Layout;
