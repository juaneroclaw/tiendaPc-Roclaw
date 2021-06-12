import React, {useEffect,useContext,useState } from 'react';
import {CartFirabase} from '../context/cartFirabase'
import NavBar from '../component/navBar/NavBar';
export const CategoryContainer = () => {
    const {cate} = useContext(CartFirabase)
    const [categ, setCateg] = useState([]);
    useEffect(()=>{
        const listado = new Promise ((resolve,reject)=>{
                resolve(cate)
        })
        listado.then((rej)=>{
            setCateg(rej)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            console.log('El Control a finalizado')
        })
        
    },[cate])
    return(
        <>
            {
            categ.length !== 0 && <NavBar category={categ}/>
            }
        </>
    )
}
