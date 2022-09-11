
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/product/:id' element={<ProductPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/order' element={<OrderPage />} ></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
