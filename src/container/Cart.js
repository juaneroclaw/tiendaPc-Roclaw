import React,{useContext} from 'react'
import {Col,Row,Table,Image,Button} from 'react-bootstrap';
import {CartContext} from '../context/cartContext'
import { Link } from "react-router-dom";
import './Cart.css';
export const Cart = () => {
    const {cant,removeItems,clearItems,getTotales} = useContext(CartContext)
    console.log(cant);
    return (
        <>
        <Row>
            <Col>
                <h1 className="text-center">Carrito de compras</h1>
            </Col>
        </Row>
        <Table responsive>
            <thead>
                <th></th>
                <th>Nombre</th>
                <th>Precio x Unidad</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>
            </thead>
            <tbody>
                {
                    cant.map(x=>
                        <tr key={x.id}>
                            <td><Image  className="img" src={x.img}/></td>
                            <td>{x.name}</td>
                            <td>${x.price}</td>
                            <td>{x.cant}</td>
                            <td>${x.total}</td>
                            <td><Button onClick={()=>removeItems(x.id)} variant="danger">Eliminar</Button></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        <Row style={{textAlign:"left"}}>
            <Col xs lg="8" style={{textAlign:"center"}}>Total a gastar ${getTotales()}</Col>
            <Col xs lg="2"><Button onClick={clearItems} variant="danger">Vaciar Carrito</Button></Col>
            <Col xs lg="2"><Button variant="info"><Link to={`/`} style={{color:"white"}}>Confirmar Compra</Link></Button></Col>
        </Row>
        </>
    )
}
