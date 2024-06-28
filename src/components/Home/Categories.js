import React, { useEffect } from "react";
import { fetchProducts } from "../../utils/dataQuery";
import ProductCard from "../Products/ProductCard";

function Categories() {
  const [products, setProducts] = React.useState([]);

  const data = async () => {
    const products = await fetchProducts();
    // console.log("PRODUCTS: ", products);
    return products;
  };

  useEffect(() => {
    const _products = data();

    Promise.resolve(_products).then((_products) => setProducts(_products));

    console.log("_PRODUCTS: ", products);
  }, []);
  return (
    <section className="py-5">
      <h3 className="text-2xl font-semibold">Categories</h3>
      <div className="products h-full pt-6 grid grid-flow-col gap-5 col-start-3 col-span-10">
        {/* {products && products?.length > 0 ? (
          products.map((product, id) => (
            <ProductCard key={id} ProductInfo={product} />
          ))
        ) : (
          <h1 className="text-center text-2xl font-semibold">
            No Products Found
          </h1>
        )} */}
      </div>
    </section>
  );
}

export default Categories;
