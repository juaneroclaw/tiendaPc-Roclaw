import React from 'react'
import {Container,Form,Row,Col,Button,Alert} from 'react-bootstrap'
export default function Formulario({onDatChange,onValMail,onValRepMail,valMail, users, repValMail, newOrden,id}) {
    return (
        <>
            <Row><Col className="text-center"><h1>Ingrese sus datos para finalizar la orden</h1></Col></Row>
            {id!=="" && <Row><Col className="text-center"><Alert variant="info">Orden de Compra: {id}</Alert></Col></Row>}

        <Container className="border border-2 rounded pt-3 mb-3">
        <Row>
            <Col className="mb-3">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="name" onChange={onDatChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" name="surname" onChange={onDatChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" onChange={onValMail} />
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
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridTelefono">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="number" placeholder="+5411111111" name="phone" onChange={onDatChange} />
                        </Form.Group>
                    </Row>
                    <Button disabled={!(users.name.length > 0 && users.surname.length > 0 && users.email.length > 0 && users.phone.length > 0)} variant="primary" type="button" onClick={newOrden}>
                        Confirmar Orden
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
        </>
    )
}
