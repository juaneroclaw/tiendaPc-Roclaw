import React from 'react';
import './footer.css';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
 const Footer = () => {
    return (
        <Nav as="ul" expand="lg" className="navBar justify-content-center pb-2 pt-2 mt-2">
                <Nav.Item as="li" className="mr-3 link"><Link to={`/`} >Terms & Condiciones</Link></Nav.Item>
                <Nav.Item as="li" className="mr-3 link"><Link to={`/`} >Politica de Privacidad</Link></Nav.Item>
                <Nav.Item as="li" className="mr-3 link"><Link to={`/`} >Politica de Reembolso</Link></Nav.Item>
                <Nav.Item as="li" className="mr-3 link"><Link to={`/`} >Soporte</Link></Nav.Item>
                <Nav.Item as="li" className="mr-3 link"><Link to={`/`} >JRoclaw Diseños</Link></Nav.Item>
        </Nav>  
    )
}
export default Footer;