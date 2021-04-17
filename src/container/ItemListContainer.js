import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ItemListContainer = ({greeting}) => {

    return(
        <Container>
            <Row>
                <Col className="text-center"> <h1>{greeting}</h1></Col>
                

            </Row>
        </Container>
    )
}
export default ItemListContainer