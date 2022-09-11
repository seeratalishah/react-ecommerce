import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductDetail from "../components/product-page/ProductDetail";
import { products } from "../data/products";

//Filter product from product array
//Store the product in a state variable

function ProductPage() {

 

  const { id } = useParams();

  const [product, setProduct] = useState(null);
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filteredProduct = products.find((product) => {
      return product.id === Number(id);
    });

   

    setProduct(filteredProduct);
    setIsLoading(false);
  }, []);

if(isLoading)
{
  return <h1>Loading....</h1>
}

  return (
    <div className="container">
      <Link to='/' >
      <span class="material-icons-outlined"> arrow_back_ios</span>
       View all products
      </Link>
      <ProductDetail product={product} />
    </div>
  );
}

export default ProductPage;
