import React,{useContext} from 'react'
import logo from '../../assets/logo.png'
import './Cart.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate=useNavigate();

  const {cartItems,all_product,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='cart'>
      <div className="cart-nav logo">
         <Link to={'/'}><img src='/logo.png' alt="MYNTRA" /></Link>
        <p>BAG----------ADDRESS----------PAYMENT</p>
        <p>100% SECURE</p>
      </div>
      <hr />
      <div className="itemandbottom">
        <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='hr'/>
        {all_product.map((item, index) => {
          const quantity=cartItems[item.id];
          if ( quantity > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.new_price}</p>
                  {/* cartitem .id will return the quantity  */}
                  <p>{cartItems[item.id]}</p>

                  <p>${item.new_price * cartItems[item.id]}</p>
                  <p onClick={()=>removeFromCart(item.id)} className="cross">x</p>
                </div>
                <hr className='hr'/>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${ getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <br />
        
      </div>
      </div>
      
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default Cart