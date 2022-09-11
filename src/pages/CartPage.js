import React from 'react'
import { Link } from 'react-router-dom';

function CartPage() {
  return (
    <div className='container'>
      <Link to='/' >
      <span class="material-icons-outlined"> arrow_back_ios</span>
       View all products
      </Link>
    </div>
  )
}

export default CartPage