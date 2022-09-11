import React from "react";
import ProductCard from "./ProductCard";
// import {products} from '../../data/products';

function ProductsView({shownProducts}) {


  return (
    <div className="container">
      <div className="products-view">
        {shownProducts.map((product, index) => {
          return (
          <ProductCard key={index} product={product} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsView;
