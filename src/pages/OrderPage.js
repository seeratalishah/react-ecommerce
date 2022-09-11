import React from "react";
import { Link } from "react-router-dom";

function OrderPage() {
  return (
    <div className="container order-page-container">
      <div className="order-page">
        <h2>Thank you for Order</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    </div>
  );
}

export default OrderPage;
