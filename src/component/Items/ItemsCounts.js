import React,{useState} from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import './ItemsCounts.css'
import { Link } from "react-router-dom";
//import Gabinete from './../imagenes/GabineteCompleto.jpg';
const ItemsCounts = ({stock,id}) => {
    const [total,setTotal] = useState(stock);
    const [inicio,setIncio] = useState(0);

    const suma = () =>{
        if(total !== 0){
            setIncio(inicio + 1);
            setTotal(total - 1);
        }
    }
    const resta = () =>{
        if( inicio !== 0){
            setIncio(inicio - 1);
            setTotal(total + 1);
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
            <Col sm={4} className='textAlign'><Button><Link to={'/cart'} style={{color:"white"}}>Agregar</Link></Button></Col>
        </Row>
        </>
        
    )
}

export default ItemsCounts