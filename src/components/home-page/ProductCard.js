import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, state, dispatch }) {
 
  const addProductToCart = ()=>{
    dispatch({ 
      type: 'ADD_PRODUCT_TO_CART',
      payload:{
           id: product.id, 
           quantity: 1
}
})
  };


  return (
    <div className="product-card">
      <img src={product.image} alt={product.alt} />

      <div className="product-data">
        <h2>{product.title}</h2>
        <p>
          Price: <span>{product.price} PKR</span>
        </p>
    

        <div className="buttons-container">
          <Link to={`/product/${product.id}`}>View product</Link>

          <button className="cart-btn" onClick={addProductToCart} >
            <span className="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
