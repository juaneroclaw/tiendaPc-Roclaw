import React from 'react';
import {CardColumns,Row,Col,Container} from 'react-bootstrap';
import Items from './Items';
const ItemList = ({item,id,tituloCategory}) => {
    return(
        <>
        {id === undefined && <Row> <Col className="text-center"> <h1>Bienvenidos a Compu Market</h1></Col> </Row>}
        {id === undefined ? <Row> <Col className="text-center"> <h2>Productos Destacados</h2></Col> </Row> : <Row> <Col className="text-center"> <h2>{tituloCategory}</h2></Col> </Row> }
        <Container className="border border-2 rounded pt-3 mb-3">
            <CardColumns>
                    {item.map((dato)=>
                        <Items key={dato.id} img={dato.img} id={dato.id} name={dato.name} descripcion={dato.descripcion} price={dato.price} stock={dato.stock} destacado={dato.destacado}/>
                    )}
            </CardColumns>
        </Container>
        </>
    )
}

export default ItemList