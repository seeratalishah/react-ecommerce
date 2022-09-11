import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

//Filter product from product array
//Store the product in a state variable

function ProductPage() {

 

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = ()=>{
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = ()=>{
    if(quantity > 0)
    {
      setQuantity(quantity - 1);
    }
    
  }

  useEffect(() => {
    const filteredProduct = products.find((product) => {
      return product.id === Number(id);
    });

    setProduct(filteredProduct);
  }, []);

  const ratingArray = [];

  for(let i =1; i<=product?.rating; i++){
   ratingArray.push(i);
  }

  return (
    <div className="container">
      <div className="product-page">
        <div className="image">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-details">
          <h2>{product?.title}</h2>
          <p>{product?.price}</p>
          <div className="rating-stars">
        {
           ratingArray.map(()=>{
            return <span class="material-icons-outlined"> star</span>
           })
        }
       </div>

          <div className="quantity">
            <button onClick={decreaseQuantity} >-</button>
            <input type="number" id="quantity" value={quantity} />
            <button onClick={increaseQuantity} >+</button>
          </div>

          <button className="cart-btn" >Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
