import React from "react";
import ProductCard from "./ProductCard";

function ProductsView() {
  const products = [
    {
      id: 1,
      image: "/images/product-1.jpg",
      alt: "Nike Air Green",
      title: "Nike Air Green",
      price: "6,000 PKR",
      rating: "4 stars",
    },
    {
        id: 1,
        image: "/images/product-1.jpg",
        alt: "Nike Air Green",
        title: "Nike Air Green",
        price: "6,000 PKR",
        rating: "4 stars",
      },
  ];

  return (
    <div className="container">
      <div className="products-view">
        {products.map((product, index) => {
          return (
          <ProductCard key={index} product={product} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsView;
