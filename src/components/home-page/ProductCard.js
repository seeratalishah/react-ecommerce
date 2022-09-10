import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.alt} />

      <div className="product-data">
        <h2>{product.title}</h2>
        <p>
          Price: <span>{product.price} PKR</span>
        </p>
        <p>Rating: {product.rating} star</p>

        <div className="buttons-container">
          <Link to={`/product/${product.id}`}>View product</Link>

          <button className="cart-btn">
            <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
