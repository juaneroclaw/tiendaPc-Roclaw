import React,{useContext,useState,useEffect} from 'react';
import logo from './carrito.png';
import './CartWidget.css';
import { Link } from "react-router-dom";
import {CartContext} from '../../context/cartContext'
const CartWidget = () =>{
    const {getItems} = useContext(CartContext)
    const [cantItems,setCantItems] = useState(0);
    useEffect(()=>{
        const cantItem = getItems();
        setCantItems(cantItem);
    },[getItems])
    return(
        <div>
           <Link to={'/cart'} className="linkCar"><img src={logo} className="carrito" alt="logo" /> { cantItems!==0 &&  <span>({cantItems})</span>} </Link>
        </div>
    )
}
export default CartWidget