import React from 'react'
import {Form,Row,Col,Button} from 'react-bootstrap'
export default function Ordenes({onValMail,ordenMail,onValRepMail,valMail,repValMail,onValOrden,valOrden,orden,ordBusq,existOrden}) {
    return (
        <>
        <Row>
            <Col className="mb-3">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNombre">
                            <Form.Label>N° de Orden</Form.Label>
                            <Form.Control type="text" placeholder="N° de Orden" name="orden" onChange={onValOrden} />
                            {valOrden && <Form.Text className="text-danger">EL N° de Orden es de 21 caracteres</Form.Text>}
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" onChange={onValMail}/>
                            {valMail && <Form.Text className="text-danger">El mail ingresado es invalido</Form.Text>}
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Repetir Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="repemail" onChange={onValRepMail} />
                            {repValMail && <Form.Text className="text-danger">El mail ingresado no coincide con el anterior</Form.Text>}
                        </Form.Group>
                    </Row>
                    <Button disabled={!( orden.orden.length > 0 && orden.email.length > 0)} variant="primary" type="button" onClick={ordBusq}>
                        Buscar
                    </Button>
                </Form>
                {ordenMail && <Row><Col className="text-center"><p className="text-danger">El email ingresado no coincide con el N° de orden que tenemos ingresado</p></Col></Row>}
                {existOrden && <Row><Col className="text-center"><p className="text-danger">La orden ingresada es erronea o no existe en nuestro sistema</p></Col></Row>}
            </Col>
        </Row>
        </>
    )
}