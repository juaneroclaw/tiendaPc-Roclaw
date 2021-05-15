import React from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Items = ({img,id,name,descripcion,price,stock}) => {
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
                <ListGroupItem>${price}</ListGroupItem>
                <ListGroupItem style={{textAlign:"center"}} ><Button variant="info" ><Link to={`/item/${id}`} style={{color:"white"}}>Ver Detalle</Link></Button></ListGroupItem>
            </ListGroup>
       </Card> 
    )
}

export default Items