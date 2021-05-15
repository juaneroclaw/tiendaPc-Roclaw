import React, {useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ItemList from '../component/Items/ItemList';
import loading from './pc.gif';
import './ItemListContaines.css';
import {useParams} from 'react-router-dom'
export const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        const listado = new Promise ((resolve,reject)=>{
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
                category:'teclado',
                name:'Teclado Gamer',
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
            setTimeout(()=>{
                resolve(productos)
            },2000)
        })
        listado.then((rej)=>{
            if(id===undefined){
                setItems(rej);
            }else{
                const nuevoCat = rej.filter(i => i.category === `${id}`)
                setItems(nuevoCat);
            }
            
        }).catch(()=>{
            console.log('Hubo un problema en la carga')
        }).finally(()=>{
            console.log('El Control a finalizado')
        })
    },[id]);

    return(
        <Container className="mt-3">
            {
            items.length > 0 ? <ItemList item={items}/> : <Row><Col className="text-center"><Image src={loading} className="loading"/></Col></Row>
            }
           
        </Container>
    )
}
