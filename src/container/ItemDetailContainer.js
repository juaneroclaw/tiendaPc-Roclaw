import React, {useState, useEffect,useContext } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ItemDetail from '../component/Items/ItemDetail';
import loading from './pc.gif';
import './ItemListContaines.css';
import {useParams} from 'react-router-dom'
import {CartContext} from '../context/cartContext'
export const ItemDetailContainer = () => {
    const {addItems,setAddItem,addItem} = useContext(CartContext)
    const [items,setItems] = useState([]);
    const [cerrar,setCerrar] = useState(true);
    const {idProducto} = useParams();
    useEffect(()=>{
        const productos= [
            {
            id:'1',
            img:'../imagenes/GabineteCompleto.jpg',
            category:'pc',
            name:'Gabinete Cromax 2801 Kit T+m+p Con Fuente 600w Cm-2801',
            descripcion:'Gabinete con fuente y Kit de teclado, mouse y parlantes.',
            price:'6590',
            stock:2
            },
            {
            id:'2',
            img:'../imagenes/Gabinete_1.jpg',
            category:'pc',
            name:'Gabinete Pc Gamer',
            descripcion:'Gabinete Pc Gamer Cooler Masterbox Q500l Filtros Magneticos.',
            price:'17450',
            stock:3
            },
            {
            id:'3',
            img:'../imagenes/Gabinete_2.jpg',
            category:'pc',
            name:'Gabinete Pc',
            descripcion:'Gabinete Pc Sin Fuente Cpu Usb 3.0 Generico Gigabyte.',
            price:'2547',
            stock:2
            },
            {
            id:'4',
            img:'../imagenes/Mouse.jpg',
            category:'mouse',
            name:'Mouse Optico',
            descripcion:'Mouse Optico Gamer Mad Catz R.a.t. Pro S3.',
            price:'19629',
            stock:6
            },
            {
            id:'5',
            img:'../imagenes/Teclado.jpg',
            name:'Teclado Gamer',
            category:'teclado',
            descripcion:'Teclado Gamer Hyperx Alloy Origins Core Switch Red Inglésrgb.',
            price:'10390',
            stock:0
            },
            {
            id:'6',
            img:'../imagenes/Parlates.jpg',
            category:'parlante',
            name:'Parlantes Bluetooth',
            descripcion:'Parlantes Para Pc Bluetooth Nisuta Rgb Usb Local Starko.',
            price:'3900',
            stock:5
            },
            {
            id:'7',
            img:'../imagenes/notebook.jpg',
            category:'notebooks',
            name:'Notebook Lenovo',
            descripcion:'Notebook Lenovo V15 IIL Intel Core I5 10ma Gen 4gb 1tb 15,6"',
            price:'97900',
            stock:3
            },
            {
            id:'8',
            img:'../imagenes/monitor.jpg',
            category:'monitores',
            name:'Monitor Samsung',
            descripcion:'Monitor Samsung F350 22" Flat Full HD 60Hz VGA HDMI',
            price:'20199',
            stock:8
            },
            {
            id:'9',
            img:'../imagenes/microfono.jpg',
            category:'microfono',
            name:'Micrófono Condensador',
            descripcion:'Micrófono Condensador Hyperx Quadcast Multipatrón Filtro Anti-Chasquidos',
            price:'17399',
            stock:4
            },
        ]
        const listado = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productos)
                setAddItem(false);
            },2000)
        })
        listado.then((rej)=>{
            //console.log(rej.find(i=>i.id===idProducto))
            setItems(rej.find(i=>i.id===idProducto));
        }).catch(()=>{
            console.log('Hubo un problema en la carga')
        }).finally(()=>{
            console.log('El Control a finalizado')
        })
    },[idProducto,setAddItem]);
    const onAdd = (count) => {
        console.log(items)
        addItem(items,count)
        setCerrar(false)
    }
    return (
        <Container className="mt-3">
            {items.length !== 0 ?  <ItemDetail img={items.img} id={items.id} name={items.name} descripcion={items.descripcion} price={items.price} stock={items.stock} item={items} onAdd={onAdd} addItems={addItems} cerrar={cerrar} /> : <Row><Col className="text-center"><Image src={loading} className="loading"/></Col></Row>}
           
        </Container>
    )
}