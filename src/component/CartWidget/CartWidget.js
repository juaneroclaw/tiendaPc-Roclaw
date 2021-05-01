import React from 'react';
import logo from './carrito.png';
import './CartWidget.css';
import { Link } from "react-router-dom";
const CartWidget = () =>{
    return(
        <div>
           <Link to={'/cart'}><img src={logo} className="carrito" alt="logo" /></Link>
        </div>
    )
}
export default CartWidget