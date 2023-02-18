import React, { useContext } from "react";
import "./index.scss";
import ProductCard from "../../components/product-card";
import { ProductsContext } from "../../contexts/products";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
