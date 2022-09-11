import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const ratingArray = [];

   for(let i =1; i<=product.rating; i++){
    ratingArray.push(i);
   }


  return (
    <div className="product-card">
      <img src={product.image} alt={product.alt} />

      <div className="product-data">
        <h2>{product.title}</h2>
        <p>
          Price: <span>{product.price} PKR</span>
        </p>
       <div className="rating-stars">
        {
           ratingArray.map(()=>{
            return <span class="material-icons-outlined"> star</span>
           })
        }
       </div>

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
