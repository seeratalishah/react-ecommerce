
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ReducerPage from './pages/ReducerPage';

//Tasks to perform

//Add product to cart --> save product data and quantity.
//Update Quantity of product in cart.
//clear cart when order is placed.

//Define initial state

const initialState = {
  cart: []
}



function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/product/:id' element={<ProductPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/order' element={<OrderPage />} ></Route>
          <Route path='/reducer' element={<ReducerPage />} ></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
