import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { fetchProducts } from "../utils/dataQuery";
import ProductCard from "../components/Products/ProductCard";
import Filter from "../components/Functionalities/Filter";
import Banner from "../components/Home/Banner";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishList] = useState([]);

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
  }, []);

  const addToCart = (item) => {
    console.log(item);
    axios
      .post("http://localhost:8000/cartItems", item)
      .then((response) => setCartItems([...cartItems, response.data]))
      .catch((error) => console.error("Error adding to cart", error));
  };

  const addToWishlist = (item) => {
    console.log(item);
    axios
      .post("http://localhost:8000/WishList", item)
      .then((response) => setWishList([...wishlist, response.data]))
      .catch((error) => {
        console.error("Error adding item to wishlist:", error);
      });
  };

  return (
    <Layout>
      <Banner />    
      <div className="home-container py-5">
        <h2 className="text-2xl font-semibold">All Products</h2>
        {/* Pass handleSearch as a prop */}
        <div className="w-full">
          <Filter
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
        </div>
        <div className="products-container products h-full pt-6 grid grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
