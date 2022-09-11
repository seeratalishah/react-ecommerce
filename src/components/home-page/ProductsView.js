import React from "react";
import ProductCard from "./ProductCard";
// import {products} from '../../data/products';

function ProductsView({shownProducts, state, dispatch}) {


  return (
    <div className="container">
      <div className="products-view">
        {shownProducts.map((product, index) => {
          return (
          <ProductCard key={index} product={product} state={state} dispatch={dispatch} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsView;
