import React from 'react'
// import {logo} from '../../assets/logo.png';
//  // Assuming you have a logo image in assets
// import {logo} from '../../assets/logo.png';
import './Navbar.css'
import { GoPerson } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
         <div className='navbar'>
        <div className="navbar-left">
            <div className="logo">
                <Link to={'/'}><img src='/logo.png' alt="MYNTRA" /></Link>
                
            </div>
            <div className="nav-links">
               <ul className='outer' >
                <li className='nav-item'>MEN
                    <ul className='dropdown'>
                        <li>Topwear</li>
                        <li>Bottomwear</li>
                        <li>Footwear</li>
                        <li>Inner & Sleepwear</li>
                        <li>Indian and festive wear</li>
                    </ul>
                </li>
                <li className='nav-item'>WOMEN
                    <ul className='dropdown'>
                        <li>Topwear</li>
                        <li>Bottomwear</li>
                        <li>Footwear</li>
                        <li>Inner & Sleepwear</li>
                        <li>Indian and festive wear</li>
                    </ul>
                </li>
                <li className='nav-item'>KIDS
                    <ul className='dropdown'>
                        <li>Topwear</li>
                        <li>Bottomwear</li>
                        <li>Footwear</li>
                        <li>Inner & Sleepwear</li>
                        <li>Indian and festive wear</li>
                    </ul>
                </li>
                <li className='nav-item'>DECOR
                    <ul className='dropdown'>
                        <li>Topwear</li>
                        <li>Bottomwear</li>
                        <li>Footwear</li>
                        <li>Inner & Sleepwear</li>
                        <li>Indian and festive wear</li>
                    </ul>
                </li>
                <li className='nav-item'>BEAUTY
                    <ul className='dropdown'>
                        <li>Topwear</li>
                        <li>Bottomwear</li>
                        <li>Footwear</li>
                        <li>Inner & Sleepwear</li>
                        <li>Indian and festive wear</li>
                    </ul>
                </li>
                <li className='nav-item'>GENZ
                    <ul className='dropdown'>
                        <li>Topwear</li>
                        <li>Bottomwear</li>
                        <li>Footwear</li>
                        <li>Inner & Sleepwear</li>
                        <li>Indian and festive wear</li>
                    </ul>
                </li>
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
               <FaRegHeart /><p>Wishlist</p>
            </div>
            <div className="bag-icon">
               <BsHandbag /><p>Bag</p>
            </div>
            
        </div>
    </div>
    
    </>
   
  )
}

export default Navbar