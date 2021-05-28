import React,{useState,useEffect} from 'react'

import {getFirestore} from '../firabase';

export const CartFirabase = React.createContext();

export const DbFirabase = ({children}) => {
    const [catid,setCatId] = useState();
    const [items,setItems] = useState([]);
    const [item,setItem] = useState([]);
    const [itemId,setItemId] = useState();
    const [cate,setCate] = useState([]);
    const [tituloCategory,setTituloCategory] = useState('');
    const db = getFirestore();
    const catCollection = db.collection("categorys");
    const itemsCollection = db.collection("items");
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
            })
            .catch((error) =>{
                console.log("Error", error)
            })
            .finally(()=>{
                console.log('Finalizo')
            })
        
    },[])
    useEffect(()=>{
        if(catid!==undefined){
            const categorys = catCollection.doc(catid)
            categorys.get()
                .then((doc)=>{
                    setTituloCategory(doc.data().nombre)
                })
                .catch((error) =>{
                    console.log("Error", error)
                })
                .finally(()=>{
                    console.log('Finalizo')
                })
        }
        const itemCollection = catid===undefined ? db.collection("items").where("destacado","==",true) : db.collection("items").where("category","==",catid);
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
                setItems(documentos)
            })
            .catch((error) =>{
                console.log("Error", error)
            })
            .finally(()=>{
                console.log('Finalizo')
            })
        
        
    },[catid,db])

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
   
    const itemsBusqID = (categoryId) => {
        setCatId(categoryId);
    }
    const itemBusqID = (itemId) => {
        setItemId(itemId);
    }
    const limpiarBusqueda = () => setItems([]);

    return (
        <CartFirabase.Provider value={{items, item, cate, tituloCategory, itemsBusqID, itemBusqID, limpiarBusqueda}}>
          {children}
        </CartFirabase.Provider>
      );
}