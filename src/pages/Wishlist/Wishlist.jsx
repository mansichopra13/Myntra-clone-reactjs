import React from 'react'
import './Wishlist.css'
import hand_icon from '../../assets/all/hand_icon.png'
import {Link} from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const Wishlist = () => {
  return (
    <div className='wish'>
    <Navbar />

        <div className="wishdiv">
        <h2> Hey! Please Login</h2>
        <img src={hand_icon} alt="" />
        <br />
        <p>Login to view items in your wishlist</p>
        <br />
        <Link to="/login"><button>LOGIN</button></Link>
        </div>
        
    </div>
  )
}

export default Wishlist