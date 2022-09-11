import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={product.alt}
      />

      <div className="product-data">
        <h1>{product.title}</h1>
        <p className="product-info"> 
          <span className="text-secondary">{product.rating}</span>
          <span className="text-tertiary">{product.price}</span>
        </p>

        <div className="flex-container">
          <div className="quantity-container">
            <button disabled={!quantity} onClick={() => setQuantity(quantity - 1)}>
              <span class="material-icons-outlined">
                remove
              </span>
            </button>
            <input type="number" min="0" value={quantity} />
            <button  onClick={() => setQuantity(quantity + 1)}>
              <span class="material-icons-outlined">
                add
              </span>
            </button>
          </div>

          <button className="add-to-cart-button" disabled={!quantity}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;