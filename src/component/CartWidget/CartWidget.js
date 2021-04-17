import React from 'react';
import logo from './carrito.png';
import './CartWidget.css';
const CartWidget = () =>{
    return(
        <div>
           <img src={logo} className="carrito" alt="logo" />
        </div>
    )
}
export default CartWidget