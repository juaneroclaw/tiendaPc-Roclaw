import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const NavBar = () =>{
    return(
            <Navbar expand="lg" className="navBar">
            <Navbar.Brand href="#home" ><Link to={`/`} className="logo">Compu Market</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown title="Periféricos" id="nav-dropdown" className="link">
                    <NavDropdown.Item eventKey="4.4" className="linkTitulo">Teclados y Mouses</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.2" className="link_sub"><Link to={`/category/teclado`}>Teclado Gamer</Link></NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" className="link_sub"><Link to={`/category/mouse`}>Mouse Gamer</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4" className="linkTitulo">Multimedia</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.1" className="link_sub"><Link to={`/category/parlante`}>Parlantes</Link></NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" className="link_sub"><Link to={`/category/microfono`}>Microfonos</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav className="mr-auto">
                    <Nav.Link className="link">
                        <Link to={`/category/pc`}>PC Armadas</Link>
                    </Nav.Link>
                    <Nav.Link className="link">
                        <Link to={`/category/notebooks`}>Notebooks</Link>
                    </Nav.Link>
                    <Nav.Link className="link">
                        <Link to={`/category/monitores`}>Monitores</Link>
                    </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link><CartWidget/></Nav.Link>   
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
}
export default NavBar