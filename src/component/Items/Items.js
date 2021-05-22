import React from 'react';
import {Card,ListGroup,ListGroupItem,Button,Alert} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Stock = (stock) => {

        if( stock > 5 ){
            return <Alert variant="success" style={{textAlign:"center"}}><b>Hay Stock</b></Alert>
        } 
        if( stock <= 5 && stock !== 0){
            return <Alert variant="warning" style={{textAlign:"center"}}><b>Poco Stock</b></Alert>
        } 
        if( stock === 0){
            return <Alert variant="danger" style={{textAlign:"center"}}><b>Sin Stock</b></Alert>
        } 

}


const Items = ({img,id,name,descripcion,price,destacado,stock}) => {
    return(
        
       <Card>
           <Card.Img variant="top" src={img} />
           <Card.Body>
           <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
            </Card.Body>
            <ListGroup>
                { destacado && <ListGroupItem> Producto destacado </ListGroupItem> }
                <ListGroupItem>{Stock(stock)}</ListGroupItem>
                <ListGroupItem>${price}</ListGroupItem>
                <ListGroupItem style={{textAlign:"center"}} ><Button variant="info" ><Link to={`/item/${id}`} style={{color:"white"}}>Ver Detalle</Link></Button></ListGroupItem>
            </ListGroup>
       </Card> 
    )
}

export default Items