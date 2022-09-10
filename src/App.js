
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/product/:id' element={<ProductPage />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
