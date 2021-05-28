import React, {useEffect,useContext,useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ItemList from '../component/Items/ItemList';
import {CartFirabase} from '../context/cartFirabase'
import loading from './pc.gif';
import './ItemListContaines.css';
import {useParams} from 'react-router-dom'
export const ItemListContainer = () => {
    const {id} = useParams();
    const {items,itemsBusqID,tituloCategory} = useContext(CartFirabase)
    const [prod, setProd] = useState([]);
    useEffect(()=>{
        setProd([])
    },[])
    useEffect(()=>{
        itemsBusqID(id);
        const listado = new Promise ((resolve,reject)=>{
            resolve(items)
        })
        listado.then((rej)=>{
            setProd(rej)
        }).catch(()=>{
            console.log('Hubo un problema en la carga')
        }).finally(()=>{
            console.log('El Control a finalizado')
        })
        
    },[id,itemsBusqID,items])

    return(
        <Container className="mt-3">
            {
            prod.length > 0 ? <ItemList item={prod} id={id} tituloCategory={tituloCategory}/> : <Row><Col className="text-center"><Image src={loading} className="loading"/></Col></Row>
            }
           
        </Container>
    )
}
