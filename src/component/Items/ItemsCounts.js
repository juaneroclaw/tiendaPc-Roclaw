import React,{useState,useEffect} from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import './ItemsCounts.css'
//import Gabinete from './../imagenes/GabineteCompleto.jpg';
const ItemsCounts = ({stock,id,onAdd}) => {
    const [total,setTotal] = useState(0);
    const [inicio,setIncio] = useState(0);
    const [activar,setActivar] = useState(false);
    useEffect(()=>{
        setTotal(stock)
    },[stock])
    const suma = () =>{
        if(total !== 0){
            console.log(total)
            setIncio(inicio + 1);
            setTotal(total - 1);
            setActivar(true)
        }
    }
    const resta = () =>{
        if( inicio !== 0){
            setIncio(inicio - 1);
            setTotal(total + 1);
        }else{
            console.log(inicio)
            setActivar(false)
        }
    }
    return(
        <>
        <Row>
            <Col sm={12} className='textAlign'><p>Hay {total} de stock</p></Col>
        </Row>
        <Row>
            <Col sm={3} className='textAlign'><Button onClick={resta} variant="danger">-</Button> </Col>
            <Col sm={2} className='textAlign'>{inicio}</Col>
            <Col sm={3} className='textAlign'><Button onClick={suma} variant="success">+</Button></Col>
            <Col sm={4} className='textAlign'><Button onClick={()=>onAdd(inicio)} disabled={!activar}>Agregar</Button></Col>
        </Row>
        </>
        
    )
}

export default ItemsCounts