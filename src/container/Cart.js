import React,{useContext} from 'react'
import {Col,Row,Table,Image,Button} from 'react-bootstrap';
import {CartContext} from '../context/cartContext'
import { Link } from "react-router-dom";
import './Cart.css';    
const selector = (cant) => {
    const select = []
    for (var i=1; i <= cant; i++){ 
        select.push(i)
    }
    return select;
}
export const Cart = () => {
    const {cant,removeItems,clearItems,getTotales,newCantUni} = useContext(CartContext)
    return (
        <>
        <Row>
            <Col>
                <h1 className="text-center">Carrito de compras</h1>
            </Col>
        </Row>
        { cant.length !== 0 ?
            <>
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
                        <tr>
                            <td><Image  className="img" src={x.img}/></td>
                            <td>{x.name}</td>
                            <td>${x.price}</td>
                            <td>
                                <select onBlur={(e)=>newCantUni(x.id,parseInt(e.target.value, 10))}>
                                {selector(x.stock).map(i=>

                                <option selected={i === x.cant} value={i}> {i}</option>
                                ) 
                                }
                                </select>
                            </td>
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
            <Col xs lg="2"><Button variant="info"><Link to={`/formulario`} style={{color:"white"}}>Confirmar Compra</Link></Button></Col>
        </Row> </> 
        :
        <Row><Col><p style={{textAlign:"center"}}>Todavia no tenes ningun producto seleccionado, para comprar podes ver nuestra sección de destacados haciendo <Link to={`/`} style={{color:"blue"}}>click aqui</Link></p></Col></Row>
        }
        </>
    )
}
