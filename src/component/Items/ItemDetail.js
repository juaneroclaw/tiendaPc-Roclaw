import React from 'react'
import {Container,Col,Row,Image,Button,Alert} from 'react-bootstrap';
import ItemsCounts from './ItemsCounts';
import { Link } from "react-router-dom";
import './ItemDetail.css'
const Stock = (stock) => {

    if( stock === 0){
        return <p className="text-danger"><b>Sin Stock</b></p>
    } 

}
const ItemDetail = ({img,id,name,descripcion,price,stock,item,onAdd, addItems, cerrar}) => {

    return (
        <Container className="border border-2 rounded pt-3 mb-3">
            <Row>
                <Col><Image src={img}/></Col>
                <Col className="border-start border-light">
                   <Row>
                    <Col>
                        <h1 className='title'> {name}</h1>
                    </Col>
                   </Row>
                   <Row>
                       <Col >
                       <p className='price'>${price}</p>
                       </Col>
                   </Row>
                   <Row>
                       <Col>
                       <p>{descripcion}</p>
                       </Col>
                   </Row>
                   <Row>
                         <Col>{Stock(stock)}</Col>
                    </Row> 
                   <Row>
                       <Col>
                       {!addItems ? cerrar ? stock !== 0 && <ItemsCounts stock={stock} id={id} onAdd={onAdd} /> : <Button variant="info" ><Link to={`/cart`} style={{color:"white"}}>Finalizar Compra</Link></Button>: <Alert variant="danger" style={{textAlign:"center"}}> Supera el stock </Alert>}
                       </Col>
                   </Row> 
                   <Row>
                       <Col className="mt-3" style={{textAlign:"center"}}>
                       <Button variant="info" ><Link to={`/`} style={{color:"white"}} >Volver</Link></Button>
                       </Col>
                   </Row> 
                </Col>
            </Row>
        </Container>
    )
}
export default ItemDetail