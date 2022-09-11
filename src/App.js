
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import CartPage from './pages/CartPage';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/product/:id' element={<ProductPage />}></Route>
          <Route path='/card' element={<CartPage />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
