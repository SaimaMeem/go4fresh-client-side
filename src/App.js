import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      
{/*     
      <p className="m-16 relative group">
  <span>Hover over me</span>
  <span className="absolute -bottom-1 left-1/2 w-0 h-2 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
  <span className="absolute -bottom-1 right-1/2 w-0 h-2 bg-red-400 group-hover:w-1/2 group-hover:transition-all"></span>
</p>
<p class="font-bold text-3xl m-16 relative w-max three">
  <span class="px-1">HELLO</span>
  <span class="absolute left-0 -bottom-1 w-full h-1 transition-all bg-yellow-400" style={{zIndex: '-9'}}></span>
</p>
<p class="font-bold text-3xl m-16 relative w-max two">
  <span>HELLO</span>
  <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
  <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-yellow-400"></span>
</p> */}
    </div>
  );
}

export default App;
