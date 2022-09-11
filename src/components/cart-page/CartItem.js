import React, { useState } from "react";
import QuantityInput from "../common/QuantityInput";


function CartItem({ product }) {

    const [quantity, setQuantity] = useState(0);
    return (
        <div className="cart-item">
            <img src={product.image} alt={product.alt} />

            <div className="product-data">
                <h2>{product.title}</h2>
                <p>
                    Price: <span>{product.price} PKR</span>
                </p>

                <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            </div>
        </div>
    );
}

export default CartItem;
