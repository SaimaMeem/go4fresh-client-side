import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import Items from './pages/Home/Items/Items';
import Testimonials from './pages/Home/Testimonials/Testimonials';
import WhyChooseUs from './pages/Home/WhyChooseUs/WhyChooseUs';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Login from './pages/Login/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App relative">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/fruits&vegetables' element={<Items></Items>}></Route>
        <Route path='/fruits&vegetables/:itemId' element={<RequireAuth>
          <ItemDetail></ItemDetail>
        </RequireAuth>}
        ></Route>
        <Route path='/whychooseus' element={<RequireAuth>
          <WhyChooseUs></WhyChooseUs>
        </RequireAuth>
        }></Route>
        <Route path='/testimonials' element={<Testimonials></Testimonials>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageinventories' element={<RequireAuth>
       <ManageInventories></ManageInventories> </RequireAuth>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}
        ></Route> 
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
