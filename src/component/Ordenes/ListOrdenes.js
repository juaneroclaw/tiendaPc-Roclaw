import React from 'react'
import {Col,Row,Table,Image,Button} from 'react-bootstrap'; 
export default function ListOrdenes ({id,listOrd,removeItems,updateOrder,getTotales,camOk}) {
    return (
        <>
        {camOk && <Row><Col><p className="text-success">Se a realizado el cambio correctamente</p></Col></Row>}
        <Row>
            <Col>
                <p>Nombre: <b>{id.buyer.name}</b></p>
            </Col>
            <Col>
                <p>Apellido: <b>{id.buyer.surname}</b></p>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>Email: <b>{id.buyer.email}</b></p>
            </Col>
            <Col>
                <p>Telefono: <b>{id.buyer.phone}</b></p>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>Fecha: <b>{id.date.toDate().toLocaleString()}</b> </p>
            </Col>
            <Col>
                <p>Estado: <b className="text-warning">En Proceso</b> </p>
            </Col>
        </Row>
        <Row>
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
                        listOrd.map(x=>
                            <tr key={x.id}>
                                <td><Image  className="img" src={x.img}/></td>
                                <td>{x.name}</td>
                                <td>${x.price}</td>
                                <td>{x.stock}</td>
                                <td>${x.total}</td>
                                <td><Button onClick={()=>removeItems(x.id)} variant="danger">Eliminar</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Row>
        <Row className="justify-content-md-center" >
            <Col xs lg="7" className="border-top border-primary" style={{textAlign:"right"}}><p className="price2">Total ${getTotales()}</p></Col>
        </Row>
        <Row className="mt-2 mb-2" style={{textAlign:"right"}}>
            <Col xs lg="3"><Button variant="info" onClick={()=>updateOrder(id.id)}>Guardar Cambio</Button></Col>
        </Row> 
        </>
    )
}
