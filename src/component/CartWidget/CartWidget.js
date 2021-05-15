import React,{useContext} from 'react';
import logo from './carrito.png';
import './CartWidget.css';
import { Link } from "react-router-dom";
import {CartContext} from '../../context/cartContext'
const CartWidget = () =>{
    const {getItems} = useContext(CartContext)
    return(
        <div>
           <Link to={'/cart'} className="linkCar"><img src={logo} className="carrito" alt="logo" /> <span>({getItems()})</span></Link>
        </div>
    )
}
export default CartWidget