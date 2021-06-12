import React,{useState,useContext,useEffect} from 'react'
import {CartFirabase} from '../context/cartFirabase'
import firebase from 'firebase/app'
import loading from './pc.gif';
import {Container,Row,Col,Image} from 'react-bootstrap'
import {getFirestore} from '../firabase'
import Ordenes from '../component/Ordenes/Ordenes';
import ListOrdenes from '../component/Ordenes/ListOrdenes';
export default function OrdenesContainer() {
    const [bOrden, setbOrden] = useState({email:"",orden:""});
    const {ordens,ordBusqID,ifOrden,setOrdenId,setifOrden} = useContext(CartFirabase);
    const [id,setId] = useState([])
    const [listOrd,setListOrd] = useState([]);
    const [mail,setMail] = useState([]);
    const [valOrden,setValOrden] = useState(false);
    const [valMail,setValMail] = useState(false);
    const [repValMail,setRepValMail] = useState(false);
    const [ordenMail,setOrdenMail] = useState(false);
    const [existOrden,setExistOrden] = useState(false);
    const [verForm,setVerForm] = useState(true);
    const [verLoading,setVerLoading] = useState(false);
    const [verList,setVerList] = useState(false);
    const [camOk,setCamOk] = useState(false);
    const db = getFirestore();
    const orders = db.collection("orders");
    useEffect(()=>{
        setbOrden({email:"",orden:""})
        setExistOrden(false)
        setOrdenMail(false)
        setCamOk(false);
        setVerForm(true)
        setVerLoading(false)
        setVerList(false)
        setId([])
    },[]);

    useEffect(()=>{
        setId(ordens)
        setOrdenId()
    },[ordens]);
    
    useEffect(()=>{
        if(id.length !== 0){
            if(id.buyer.email !== bOrden.email){
                if(bOrden.email!==''){
                    setOrdenMail(true)
                    setVerForm(true)
                    setVerLoading(false)
                    setId([])
                    setbOrden({email:"",orden:""})
                    setTimeout(() => {
                        setOrdenMail(false)
                      }, 2000);
                }else{
                    setId([])
                }
            }else{
                setVerLoading(false)
                setVerList(true);
                setListOrd(id.cant);
            }
        }
    },[id])
    useEffect(()=>{
        if(ifOrden){
            setExistOrden(true)
            setVerForm(true)
            setVerLoading(false)
            setbOrden({email:"",orden:""})
            setTimeout(() => {
                setifOrden(false);
                setExistOrden(false)
              }, 2000);
        }
    },[ifOrden])
    function onDatChange(e) {
        const {name,value} = e.target
        setbOrden({
          ...bOrden,
          [name]: value
        });
    }
    function onValMail(e) {
        const arroba = "@"
        if(e.target.value.includes(arroba) ){
            setMail(e) 
            setValMail(false)
        }else{
            setMail([])
            setValMail(true)
        }  
    }
    function onValOrden(e){
        if(e.target.value.length === 20){
            setValOrden(false)
            onDatChange(e);
        }else{
            setValOrden(true)
        }
    }

    function onValRepMail(e) {
        
        if(e.target.value === mail.target.value){
            onDatChange(mail);
            setRepValMail(false)
        }else{
            setRepValMail(true)
        } 
    }
    function ordBusq(){
        setExistOrden(false)
        setOrdenMail(false)
        setVerForm(false)
        setVerLoading(true)
        setVerList(false)
        ordBusqID(bOrden.orden)
    }

    const removeItems = (itemId) => {
        const newCant = listOrd.filter(i=>i.id !== itemId);
        setListOrd(newCant);
      }
    const getTotales = () =>{
        const totales = listOrd.reduce((a,b)=>(a + b.total),0)
        return totales;
    }
    const updateOrder = (ids) =>{
        const order = orders.doc(ids)
        order.update({
            cant:listOrd,
            total:getTotales()
        })
        .then((res)=>{
            setCamOk(true)
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            console.log('Finalizo')
        })
    }

    return (
        <>
        <Row><Col className="text-center"><h1>Mis Ordenes de compras</h1></Col></Row>
        <Row><Col className="text-center"><h3>Aca podes visualizar y editar tu orden de compra</h3></Col></Row>
        <Container className="border border-2 rounded pt-3 mb-3">
        {verForm && <Ordenes orden={bOrden} existOrden={existOrden} valMail={valMail} ordenMail={ordenMail} repValMail={repValMail} onValMail={onValMail} onValRepMail={onValRepMail} onValOrden={onValOrden} ordBusq={ordBusq} valOrden={valOrden} />}
        {verLoading && <Row><Col className="text-center"><Image src={loading} className="loading"/></Col></Row>}
        {verList && <ListOrdenes id={id} listOrd={listOrd} camOk={camOk} removeItems={removeItems} updateOrder={updateOrder} getTotales={getTotales}/>}
        </Container>
        </>
    )
}
