import React from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Stock = (stock) => {

        if( stock > 5 ){
            return <b className="text-primary" >Hay Stock</b>
        } 
        if( stock <= 5 && stock !== 0){
            return <b className="text-warning">Poco Stock</b>
        } 
        if( stock === 0){
            return <b className="text-danger">Sin Stock</b>
        } 

}


const Items = ({img,id,name,descripcion,price,destacado,stock}) => {
    return(
        <Card border="secondary" key={id}>
           <Card.Img variant="top" src={img} />
           <Card.Body>
           <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
            </Card.Body>
            <ListGroup variant="light">
                { destacado ? <ListGroupItem> <p style={{textAlign:"center"}}><b className="text-info">Producto destacado</b>  {Stock(stock)}</p></ListGroupItem> : <ListGroupItem><p style={{textAlign:"center"}}>{Stock(stock)}</p></ListGroupItem>}
                <ListGroupItem><p className='price' style={{textAlign:"center"}}>${price}</p></ListGroupItem>
                <ListGroupItem style={{textAlign:"center"}} ><Button variant="info" ><Link to={`/item/${id}`} style={{color:"white"}}>Ver Detalle</Link></Button></ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default Items