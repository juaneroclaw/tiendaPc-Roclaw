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
        setItems([]);
    },[])
    useEffect(()=>{
        itemBusqID(idProducto);
        const listado = new Promise ((resolve,reject)=>{
            setAddItem(false);
            resolve(item)
        })
        listado.then((rej)=>{
            setItems(rej)
        }).catch(()=>{
            console.log('Hubo un problema en la carga')
        }).finally(()=>{
            console.log('El Control a finalizado')
        })
        
    },[idProducto,itemBusqID,item,setAddItem])
    const onAdd = (count) => {
        console.log(items)
        addItem(items,count)
        setCerrar(false)
    }
    return (
        <Container className="mt-3">
            {items.length !== 0 ?  <ItemDetail img={items.img} id={items.id} name={items.name} descripcion={items.descripcion} price={items.price} stock={items.stock} item={items} onAdd={onAdd} addItems={addItems} cerrar={cerrar}/> : <Row><Col className="text-center"><Image src={loading} className="loading"/></Col></Row>}
           
        </Container>
    )
}
