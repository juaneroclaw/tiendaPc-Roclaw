import React, {useState, useEffect,useContext } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ItemDetail from '../component/Items/ItemDetail';
import loading from './pc.gif';
import './ItemListContaines.css';
import {useParams} from 'react-router-dom'
import {CartContext} from '../context/cartContext'
import {CartFirabase} from '../context/cartFirabase'
export const ItemDetailContainer = () => {
    const {addItems,setAddItem,addItem} = useContext(CartContext)
    const {item,itemBusqID} = useContext(CartFirabase)
    const [items,setItems] = useState([]);
    const [cerrar,setCerrar] = useState(true);
    const {idProducto} = useParams();

    useEffect(()=>{
        setItems([])
        itemBusqID(idProducto);
        setAddItem(false);
        if(idProducto===item.id){
            setItems(item)
        }
    },[idProducto,setAddItem,item])

    const onAdd = (count) => {
        addItem(items,count)
        setCerrar(false)
    }
    return (
        <Container className="pt-3">
            {items.length !== 0?  <ItemDetail img={items.img} id={items.id} name={items.name} descripcion={items.descripcion} price={items.price} stock={items.stock} item={items} onAdd={onAdd} addItems={addItems} cerrar={cerrar}/> : <Row><Col className="text-center"><Image src={loading} className="loading"/></Col></Row>}
           
        </Container>
    )
}
