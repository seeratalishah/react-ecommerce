import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, state, dispatch }) {
 
  const addProductToCart = ()=>{
    if(!isProductAddedToCard){
      
    }
    dispatch({ 
      type: 'ADD_PRODUCT_TO_CART',
      payload:{
           id: product.id, 
           quantity: 1
}
})
  };

  const isProductAddedToCard = state.cart.find((cartProduct)=>{
    return cartProduct.id === product.id;

  })


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

          <button className="cart-btn" disabled={isProductAddedToCard} onClick={addProductToCart} >
            <span className="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
