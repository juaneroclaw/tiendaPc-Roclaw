import React,{useState,useEffect} from 'react'

export const CartContext = React.createContext();

export const Cantidad = ({ children }) => {
  const [cant, setCant] = useState([]);
  const [addItems,setAddItem] = useState(false);
  useEffect(()=>{
    console.log(cant)
  },[cant]);


  const isInCart = (id) => {
    const cantCompra = cant.find(i=>i.id === id);
      if(cantCompra!==undefined){
        return true;
      }
      return false;
  }  

  const calCantUni = (item,quantity) =>{
    const busqueda = [...cant];
    busqueda.forEach(i =>{
      if(i.id ===  item.id){
        const newConts = i.cant + quantity;
        if(newConts > i.stock){
          setAddItem(true)
        }else{
          i.total = newConts * i.price
          i.cant = newConts;
          setAddItem(false);
        }
      }
    })
    setCant(busqueda);
  }

  const newCantUni = (idItem,quantity) =>{
    const busqueda = [...cant];
    busqueda.forEach(i =>{
      if(i.id ===  idItem){
          i.cant = quantity;
          i.total = quantity * i.price
        }
      })
    setCant(busqueda);
  }

  const addItem = (item,quantity) => {
    console.log(item)
    if(isInCart(item.id)){
      calCantUni(item,quantity);
    }else{
      const  total = quantity * item.price; 
      setCant([...cant,{...item, cant:quantity, total:total}])
    }
  }
  const removeItems = (itemId) => {
    console.log(itemId)
    const newCant = cant.filter(i=>i.id !== itemId);
    setCant(newCant);
    console.log(cant);
  }
  const getTotales = () =>{
    const totales = cant.reduce((a,b)=>(a + b.total),0)
    return totales;
  }
  const getItems = () =>{
    
    const getItems = cant.reduce((a,b)=>(a + b.cant),0)
    console.log(getItems);
    return getItems;
  }
  
  const clearItems = () =>{
      setCant([]);
      setAddItem(false);
  } 
  return (
    <CartContext.Provider value={{cant, addItems, setAddItem, addItem, removeItems, clearItems, getTotales, getItems, newCantUni}}>
      {children}
    </CartContext.Provider>
  );
};
