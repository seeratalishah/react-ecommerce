import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

//Filter product from product array
//Store the product in a state variable

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const filteredProduct = products.find((product) => {
      return product.id === Number(id);
    });

    setProduct(filteredProduct);
  }, []);

  return (
    <div className="container">
      <div className="product-page">
        <div className="image">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-details">
          <h2>{product?.title}</h2>
          <p>{product?.price}</p>
          <p>{product?.rating}</p>

          <div className="quantity">
            <button>-</button>
            <input type="number" />
            <button>+</button>
          </div>

          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
