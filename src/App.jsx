import React,{useEffect} from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter,Route, Routes,useNavigate} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './Firbase' 
import ShopCategory from './pages/ShopCategory/ShopCategory';
import men_banner from './assets/all/banner_mens.png';
import women_banner from './assets/all/banner_women.png'
import kid_banner from './assets/all/banner_kids.png'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Wishlist from './pages/Wishlist/Wishlist';


const Approutes = () => {
  
   const navigate= useNavigate();

  useEffect(()=>{
   
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }
      else{
        console.log("Logged Out");
        navigate('/login');
      }
      setCheckingAuth(false);
    })
   
  },[]);

 
  return (
    <>
    {/* <BrowserRouter> */}
    
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory  banner={women_banner} category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory  banner={kid_banner} category="kids"/>}/>
         <Route path='/decor' element={<ShopCategory category="decor"/>}/> 
        <Route path='/beauty' element={<ShopCategory category="beauty"/>}/>
        <Route path='/genz' element={<ShopCategory category="genz"/>}/>
        {/* <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/> */}
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>

      </Routes>
      <Footer/>
      {/* </BrowserRouter> */}
    </>
  );
};

const App=()=>{
  return(
    <BrowserRouter>
      <ToastContainer/>
      <Approutes/>
    </BrowserRouter>
    
  );
};

export default App
