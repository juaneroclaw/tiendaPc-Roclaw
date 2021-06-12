import React,{useState,useEffect} from 'react'

import {getFirestore} from '../firabase';

export const CartFirabase = React.createContext();

export const DbFirabase = ({children}) => {
    const [catkey,setCatKey] = useState();
    const [catid,setCatId] = useState('');
    const [items,setItems] = useState([]);
    const [item,setItem] = useState([]);
    const [ordens,setOrdens] = useState([]);
    const [itemId,setItemId] = useState();
    const [ordenId,setOrdenId] = useState();
    const [ifCat,setifCat] = useState(false);
    const [ifListCat,setifListCat] = useState(false);
    const [ifOrden,setifOrden] = useState(false);
    const [cate,setCate] = useState([]);
    const [tituloCategory,setTituloCategory] = useState('');
    const db = getFirestore();
    const catCollection = db.collection("categorys");
    const itemsCollection = db.collection("items");
    const ordenCollection = db.collection("orders");
    useEffect(()=>{
        catCollection.get()
            .then((querySnapShot)=>{
                if(querySnapShot.size === 0 ){
                    return
                }
                const documentos = querySnapShot.docs.map((doc)=>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setCate(documentos)
                setifListCat(true);
            })
            .catch((error) =>{
                console.log("Error", error)
            })
            .finally(()=>{
                console.log('Finalizo')
            })
        
    },[])

    useEffect(()=>{
        setifCat(false)
        if(catkey!==undefined){
            const categorys = catCollection.where("key","==",catkey)
            categorys.get()
                .then((doc)=>{
                    if(doc.size === 0){
                        return
                    }
                    doc.docs.map((cat)=>{
                        setCatId(cat.id)
                        setTituloCategory(cat.data().nombre)   
                    })
                    
                })
                .catch((error) =>{
                    console.log("Error", error)
                })
                .finally(()=>{
                    console.log('Finalizo')
                })
        }else{
            setCatId('')
        }
    },[catkey])

    useEffect(()=>{
        const itemCollection = catid==='' ? itemsCollection.where("destacado","==",true) : itemsCollection.where("category","==",catid);
        itemCollection.get()
            .then((querySnapShot)=>{
                if(querySnapShot.size === 0 ){
                   return
                }
                const documentos = querySnapShot.docs.map((doc)=>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setifCat(true)
                setItems(documentos)
            })
            .catch((error) =>{
                console.log("Error", error)
            })
            .finally(()=>{
                console.log('Finalizo')
            })
        
        
    },[catid])

    useEffect(()=>{
        const itemCollection = itemsCollection.doc(itemId);
        itemCollection.get()
            .then((doc)=>{
                if(!doc.exists){
                    return
                }
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch((error) =>{
                console.log("Error", error)
            })
            .finally(()=>{
                console.log('Finalizo')
            })
        
        
    },[itemId])

    useEffect(()=>{
        if(ordenId!==undefined){
            const ordersCollection = ordenCollection.doc(ordenId);
            ordersCollection.get()
                .then((doc)=>{
                    if(!doc.exists){
                        setifOrden(true)
                        return
                    }
                    setOrdens({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                .catch((error) =>{
                    console.log("Error", error)
                })
                .finally(()=>{
                    console.log('Finalizo')
                })
        }
    },[ordenId])

    const itemsBusqID = (categoryId) => {
        setCatKey(categoryId);
    }
    const itemBusqID = (itemId) => {
        setItemId(itemId);
    }
    const ordBusqID = (ordId) => {
        setOrdenId(ordId);
        setifOrden(false);
    }
    const limpiarBusqueda = () => setItems([]);

    return (
        <CartFirabase.Provider value={{items, item, cate, tituloCategory, ifCat, ifListCat, ordens, ifOrden, setifOrden,setOrdenId, itemsBusqID, itemBusqID, limpiarBusqueda,ordBusqID}}>
          {children}
        </CartFirabase.Provider>
      );
}