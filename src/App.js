
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
        </Routes>
    </div>
  );
}

export default App;
