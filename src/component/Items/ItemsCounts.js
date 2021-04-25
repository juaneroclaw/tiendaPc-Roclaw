import React,{useState} from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import './ItemsCounts.css'
//import Gabinete from './../imagenes/GabineteCompleto.jpg';
const ItemsCounts = ({stock}) => {
    const [total,setTotal] = useState(stock);
    const [inicio,setIncio] = useState(0);

    const suma = () =>{
        if(total != 0){
            setIncio(inicio + 1);
            setTotal(total - 1);
        }
    }
    const resta = () =>{
        if( inicio != 0){
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
            <Col sm={4} className='textAlign'><Button onClick={resta} variant="danger">-</Button> </Col>
            <Col sm={4} className='textAlign'>{inicio}</Col>
            <Col sm={4} className='textAlign'><Button onClick={suma} variant="success">+</Button></Col>
        </Row>
        <Row><Col sm={12} className='textAlign'><Button>Comprar</Button></Col></Row>
        </>
        
    )
}

export default ItemsCounts