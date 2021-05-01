import React from 'react'
import {Col,Row,Image,Button} from 'react-bootstrap';
import ItemsCounts from './ItemsCounts';
import { Link } from "react-router-dom";
const ItemDetail = ({img,id,name,descripcion,price,stock}) => {
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
                       <Col>
                       <ItemsCounts stock={stock} id={id} />
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