import React, { useEffect ,useState} from 'react'
// import {logo} from '../../assets/logo.png';
//  // Assuming you have a logo image in assets
// import {logo} from '../../assets/logo.png';
import './Navbar.css'
import { GoPerson } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import {Link} from 'react-router-dom'


const Navbar = () => {

    const[menu,setMenu]=useState("MEN");

    // useEffect(()=>{

    // },[]);

  return (
    <>
         <div className='navbar'>
        <div className="navbar-left">
            <div className="logo">
                <Link to={'/'}><img src='/logo.png' alt="MYNTRA" /></Link>
                
            </div>
            <div className="nav-links">
               <ul className='outer' >
                <li onClick={()=>{setMenu("mens")}} > <Link style={{textDecoration:'none', color:'black'}} to="/mens"> MEN </Link>{menu==="mens" ? <hr/> : <></> }</li>
                <li onClick={()=>{setMenu("womens")}} > <Link style={{textDecoration:'none', color:'black'}} to="/womens"> WOMEN </Link> {menu==="womens" ? <hr/> : <></> }</li>
                <li onClick={()=>{setMenu("kids")}} > <Link style={{textDecoration:'none', color:'black'}} to="/kids"> KIDS </Link> {menu==="kids" ? <hr/> : <></> }</li>               
                <li onClick={()=>{setMenu("decor")}} > <Link style={{textDecoration:'none', color:'black'}} to="/decor"> DECOR </Link> {menu==="decor" ? <hr/> : <></> }</li>               
                <li onClick={()=>{setMenu("beauty")}} > <Link style={{textDecoration:'none', color:'black'}} to="/beauty"> BEAUTY </Link> {menu==="beauty" ? <hr/> : <></> }</li>            
                <li onClick={()=>{setMenu("genz")}} > <Link style={{textDecoration:'none', color:'black'}} to="/genz"> GENZ </Link> {menu==="genz" ? <hr/> : <></> }</li>

                <li className='nav-item'>STUDIO<sup><b>NEW</b>
                </sup>
                <ul className='dropdown'>
                        <li>Topwear</li>
                        <li>Bottomwear</li>
                        <li>Footwear</li>
                        <li>Inner & Sleepwear</li>
                        <li>Indian and festive wear</li>
                    </ul>
                </li>
               </ul>
            </div>
        </div>
        <div className="navbar-right">
            <div className="search-bar">
                {/* question - how to input search icon in placeholder */}
                <input type="text" placeholder='Search for products,brands and more' />
            </div>
            <div className="profile-icon">
                <Link to={'/login'}><GoPerson /></Link>
                
                <p>Profile</p>
            </div>
            <div className="wishlist-icon">
               <Link to={'/Wishlist'}><FaRegHeart /></Link><p>Wishlist</p>
            </div>
            <div className="bag-icon">
                <Link to={'/cart'}><BsHandbag /></Link>
               <p>Bag</p>
            </div>
            
        </div>
    </div>
    
    </>
   
  )
}

export default Navbar