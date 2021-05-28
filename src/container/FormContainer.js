import React,{useState,useContext} from 'react'
import {CartContext} from '../context/cartContext'
import firebase from 'firebase/app'
import {getFirestore} from '../firabase'
import Formulario from '../component/Formulario/Formulario';
export default function FormContainer() {
    const [users, setUsers] = useState({name:"",surname:"",email:"",phone:""});
    const {cant,getTotales} = useContext(CartContext);
    const [id,setId] = useState("")
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
                setId(res.id)
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
    return (
        <>
        <Formulario onDatChange={onDatChange} newOrden={newOrden} id={id}/>
        </>
    )
}
