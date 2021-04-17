import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {Navbar, Nav} from 'react-bootstrap';
const NavBar = () =>{
    return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Compu Market</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Componentes</Nav.Link>
                    <Nav.Link href="#link">Equipos</Nav.Link>
                </Nav>
                <CartWidget/>
            </Navbar.Collapse>
            </Navbar>
        )
}
export default NavBar