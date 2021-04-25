import React from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import ItemsCounts from './ItemsCounts';
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
                <ListGroupItem> <ItemsCounts stock={stock} /></ListGroupItem>
            </ListGroup>
       </Card> 
    )
}

export default Items