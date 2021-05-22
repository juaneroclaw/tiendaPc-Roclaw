import React from 'react';
import {CardColumns,Row,Col} from 'react-bootstrap';
import Items from './Items';
const ItemList = ({item,id,tituloCategory}) => {
    return(
        <>
        {id === undefined ? <Row> <Col className="text-center"> <h2>Productos Destacados</h2></Col> </Row> : <Row> <Col className="text-center"> <h2>{tituloCategory}</h2></Col> </Row> }
        <CardColumns>
            {item.map((dato,idx)=>
                <Items key={idx} img={dato.img} id={dato.id} name={dato.name} descripcion={dato.descripcion} price={dato.price} stock={dato.stock} destacado={dato.destacado}/>
            )}
        </CardColumns>
        </>
    )
}

export default ItemList