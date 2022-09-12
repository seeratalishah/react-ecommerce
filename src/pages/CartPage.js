import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import CartItem from "./../components/cart-page/CartItem";

function CartPage({state, dispatch}) {
      
      const filteredProducts = products.filter((product)=>{
        return state.cart.find((cartProduct)=>{
          return cartProduct.id === product.id;
        })
      })

  return (
    <div className="container cart-page">
      <Link to="/">
        <span class="material-icons-outlined"> arrow_back_ios</span>
        View all products
      </Link>

      <div className="cart-items-container">
        {products.slice(0, 4).map((product, index) => {
          return <CartItem key={index} product={product} state={state} />;
        })}
      </div>


      <div className="flex-container">
        <div className="left-container">
          <div className="delivery-fee-container">
            <span>Delivery Fee: </span>
            <span>300 PKR</span>
          </div>

          <div className="total-container">
            <span>Total: </span>
            <span>12, 000 PKR</span>
          </div>
        </div>

        <div className="right-container">
          <button className="complete-order ">Complete Order</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
