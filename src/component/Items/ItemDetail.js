import React from 'react'
import {Col,Row,Image,Button,Alert} from 'react-bootstrap';
import ItemsCounts from './ItemsCounts';
import { Link } from "react-router-dom";
const ItemDetail = ({img,id,name,descripcion,price,stock,item,onAdd, addItems, cerrar}) => {
    console.log(item);
    return (
        <>
            <Row>
                <Col>
                <h1>{name}</h1>
                </Col>
            </Row>
            <Row>
                <Col><Image src={img}/></Col>
                <Col>
                   <Row>
                       <Col>
                       <p>{descripcion}</p>
                       </Col>
                       <Col>
                       <p>${price}</p>
                       </Col>
                   </Row> 
                   <Row>
                       <Col style={{textAlign:"center"}}>
                       {!addItems ? cerrar ? <ItemsCounts stock={stock} id={id} onAdd={onAdd} /> : <Button variant="info" ><Link to={`/cart`} style={{color:"white"}}>Finalizar Compra</Link></Button>: <Alert variant="danger" style={{textAlign:"center"}}> Supera el stock </Alert>}
                       </Col>
                   </Row> 
                   <Row>
                       <Col className="mt-3" style={{textAlign:"center"}}>
                       <Button variant="info" ><Link to={`/`} style={{color:"white"}}>Volver</Link></Button>
                       </Col>
                   </Row> 
                </Col>
            </Row>
        </>
    )
}
export default ItemDetail