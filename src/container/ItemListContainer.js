import React, {useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ItemList from '../component/Items/ItemList';
import loading from './pc.gif';
import './ItemListContaines.css';
export const ItemListContainer = ({greeting}) => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
        const productos= [
            {
            id:'1',
            img:'./imagenes/GabineteCompleto.jpg',
            name:'Gabinete Cromax 2801 Kit T+m+p Con Fuente 600w Cm-2801',
            descripcion:'Gabinete con fuente y Kit de teclado, mouse y parlantes.',
            price:'6590',
            stock:2
            },
            {
            id:'2',
            img:'./imagenes/Gabinete_1.jpg',
            name:'Gabinete Pc Gamer',
            descripcion:'Gabinete Pc Gamer Cooler Masterbox Q500l Filtros Magneticos.',
            price:'17450',
            stock:3
            },
            {
            id:'3',
            img:'./imagenes/Gabinete_2.jpg',
            name:'Gabinete Pc',
            descripcion:'Gabinete Pc Sin Fuente Cpu Usb 3.0 Generico Gigabyte.',
            price:'2547',
            stock:2
            },
            {
            id:'4',
            img:'./imagenes/Mouse.jpg',
            name:'Mouse Optico',
            descripcion:'Mouse Optico Gamer Mad Catz R.a.t. Pro S3.',
            price:'19629',
            stock:6
            },
            {
            id:'5',
            img:'./imagenes/Teclado.jpg',
            name:'Teclado Gamer',
            descripcion:'Teclado Gamer Hyperx Alloy Origins Core Switch Red Inglésrgb.',
            price:'10390',
            stock:0
            },
            {
            id:'6',
            img:'./imagenes/Parlates.jpg',
            name:'Parlantes Bluetooth',
            descripcion:'Parlantes Para Pc Bluetooth Nisuta Rgb Usb Local Starko.',
            price:'3900',
            stock:5
            },
        ]
        const listado = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productos)
            },2000)
        })
        listado.then((rej)=>{
            setItems(rej);
        }).catch(()=>{
            console.log('Hubo un problema en la carga')
        }).finally(()=>{
            console.log('El Control a finalizado')
        })
    },[]);

   
    return(
        <Container>
            <Row>
                <Col className="text-center"> <h1>{greeting}</h1></Col>
            </Row>
            {items.length > 0 ? <ItemList item={items}/> : <Row><Col className="text-center"><Image src={loading} className="loading"/></Col></Row>}
           
        </Container>
    )
}
