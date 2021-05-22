import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const NavBar = (category) =>{
    return(
            <Navbar expand="lg" className="navBar">
            <Navbar.Brand href="#home" ><Link to={`/`} className="logo">Compu Market</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        category.category.map((cate)=>
                        
                        <Nav.Link className="link">
                            <Link to={`/category/${cate.id}`}>{cate.nombre}</Link>
                        </Nav.Link>
                        
                    )}
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link><CartWidget/></Nav.Link>   
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
}
export default NavBar