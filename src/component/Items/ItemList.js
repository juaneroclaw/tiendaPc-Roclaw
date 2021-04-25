import React from 'react';
import {CardColumns} from 'react-bootstrap';
import Items from './Items';
const ItemList = ({item}) => {
    let count = 0;
    return(
        <>
        <CardColumns>
            {item.map((dato)=>
                <Items img={dato.img} id={dato.id} name={dato.name} descripcion={dato.descripcion} price={dato.price} stock={dato.stock}/>
            )}
        </CardColumns>
        </>
    )
}

export default ItemList