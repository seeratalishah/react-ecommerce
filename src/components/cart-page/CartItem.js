import React from "react";

function CartItem({product}) {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.alt} />

      <div className="product-data">
        <h2>{product.title}</h2>
        <p>
          Price: <span>{product.price} PKR</span>
        </p>

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

export default CartItem;
