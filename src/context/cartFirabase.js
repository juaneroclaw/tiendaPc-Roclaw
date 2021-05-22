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
    useEffect(()=>{
        const catCollection = db.collection("categorys");
        catCollection.get()
            .then((querySnapShot)=>{
                if(querySnapShot.size === 0 ){
                    console.log("no hay items") 
                    return
                }else{
                    console.log(`hay ${querySnapShot.size} items `) 
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
        
    },[db])
    useEffect(()=>{
        if(catid!==undefined){
            const categoryCollection = db.collection("categorys");
            const categorys = categoryCollection.doc(catid)
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
        const itemsCollection = catid===undefined ? db.collection("items").where("destacado","==",true) : db.collection("items").where("category","==",catid);
        itemsCollection.get()
            .then((querySnapShot)=>{
                if(querySnapShot.size === 0 ){
                    console.log("no hay items") 
                    return
                }else{
                    console.log(`hay ${querySnapShot.size} items `) 
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
        const itemsCollection = db.collection("items");
        const itemCollection = itemsCollection.doc(itemId);
        itemCollection.get()
            .then((doc)=>{
                if(!doc.exists){
                    console.log("mo existe")
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
        
        
    },[itemId,db])
   
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