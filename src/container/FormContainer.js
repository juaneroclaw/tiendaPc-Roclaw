import React,{useState,useContext} from 'react'
import {CartContext} from '../context/cartContext'
import firebase from 'firebase/app'
import {getFirestore} from '../firabase'
import Formulario from '../component/Formulario/Formulario';
export default function FormContainer() {
    const [users, setUsers] = useState({name:"",surname:"",email:"",phone:""});
    const {cant,getTotales,clearItems} = useContext(CartContext);
    const [id,setId] = useState("")
    const [mail,setMail] = useState([]);
    const [valMail,setValMail] = useState(false);
    const [repValMail,setRepValMail] = useState(false);
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrden = () =>{
        let orden = {
            buyer:{
                name: users.name,
                surname: users.surname,
                email: users.email,
                phone: users.phone
            },
            cant,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total:getTotales()
        }
        orders.add(orden)
            .then((res)=>
                setId(res.id),
                clearItems()
            )
            .catch((err)=>console.log("error: ",err))
    }
    function onDatChange(e) {
        const {name,value} = e.target
        setUsers({
          ...users,
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
    function onValRepMail(e) {
        
        if(e.target.value === mail.target.value){
            onDatChange(mail)
            setRepValMail(false)
        }else{
            setRepValMail(true)
        } 
    }
    return (
        <>
        <Formulario onDatChange={onDatChange} users={users} valMail={valMail} repValMail={repValMail} onValMail={onValMail} onValRepMail={onValRepMail} newOrden={newOrden} id={id}/>
        </>
    )
}
