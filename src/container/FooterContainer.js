import React, {useContext} from 'react';
import {CartFirabase} from '../context/cartFirabase'
import Footer from '../component/Footer/Footer';
export const FooterContainer = () => {
    const {ifListCat} = useContext(CartFirabase)
    return(
        <>
            {
            ifListCat && <Footer/>
            }
        </>
    )
}