import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Items from './pages/Home/Items/Items';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/fruits&vegetables' element={<Items></Items>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
