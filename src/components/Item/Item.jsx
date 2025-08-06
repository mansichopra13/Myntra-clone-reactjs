import React,{useContext} from 'react'
import './Item.css'
import { ShopContext } from '../../context/ShopContext'
import add_icon_green from '../../assets/icons/add_icon_green.png'
import remove_icon_red from '../../assets/icons/remove_icon_red.png'
import add_icon_white from '../../assets/icons/add_icon_white.png'

const Item = ({id,name,image,new_price,old_price}) => {

  const{cartItems , addToCart,removeFromCart} = useContext(ShopContext);

  return (
    <div className='item'>
      <img className='imgcss' src={image} alt="" />
      <div className="itemcss">
              {
       !cartItems[id]
          ? <img  className='add' onClick={() => addToCart(id)} src={add_icon_white} alt=''/>
          : <div className='item-counter'>
              <img onClick={() => removeFromCart(id)} src={remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={add_icon_green} alt="" />
            </div>
        }
        </div>

      <p>{name}</p>
      
      <div className="item-prices">
        <div className="new">
          ${new_price}
        </div>
        <div className="old">
          ${old_price}
        </div>
      </div>
      
     

    </div>
  )
}

export default Item