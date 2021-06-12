import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const NavBar = (category) =>{
    return(
            <Navbar expand="lg" className="navBar">
            <Navbar.Brand href="#home" ><Link to={`/`} className="logo">Compu Market</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown title="Categorias" className="mr-3 link">
                    {
                        category.category.map((cate)=>
                        
                        <NavDropdown.Item className="link" key={cate.key}>
                            <Link to={`/category/${cate.key}`}>{cate.nombre}</Link>
                        </NavDropdown.Item>
                        
                    )}
                </NavDropdown>
                <Nav className="mr-auto link"><Link to={`/ordenes`}>Mis Ordenes</Link></Nav>
                <Nav className="justify-content-md-end">
                    <Nav.Link><CartWidget/></Nav.Link>   
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
}
export default NavBar