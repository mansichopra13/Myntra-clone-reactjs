import React,{useEffect} from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter,Route, Routes,useNavigate} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './Firbase' 


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
    
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
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
