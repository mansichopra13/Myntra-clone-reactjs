import React,{useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Placeorder.css'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Placeorder = () => {
  const navigate=useNavigate();
  const {getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='placeorder'>
      <Navbar/>
      <div className="two">
          <form action="#">
        <h1>Delivery Information</h1><br />
        <div className="c">
          <label htmlFor="cart"><b>
            Cart Total :${ getTotalCartAmount()===0?0:getTotalCartAmount()+2}
            </b></label>
        </div>
        <div className="naming">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <div className="mail">
          <input type="email" placeholder='Email Address'/>
        </div>
        <div className="street">
          <input type="text" placeholder='Street' />
        </div>
        <div className="naming">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div> <br />
        <div className="naming">
          <input type="text"  placeholder='Zipcode'/>
          <input type="text" placeholder='Country' />
        </div><br /><br />
        <div className="num">
          <input type="number" placeholder='Enter Your Number' />
        </div><br />
        <div className="cart">
          
          
          <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
        </div>


      </form>


        
      
      </div>
      
    </div>
  )
}

export default Placeorder