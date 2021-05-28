import React,{useState} from 'react'

export const CartContext = React.createContext();

export const Cantidad = ({ children }) => {
  const [cant, setCant] = useState([]);
  const [addItems,setAddItem] = useState(false);
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
    if(isInCart(item.id)){
      calCantUni(item,quantity);
    }else{
      const  total = quantity * item.price; 
      setCant([...cant,{...item, cant:quantity, total:total}])
    }
  }
  const removeItems = (itemId) => {
    const newCant = cant.filter(i=>i.id !== itemId);
    setCant(newCant);
  }
  const getTotales = () =>{
    const totales = cant.reduce((a,b)=>(a + b.total),0)
    return totales;
  }
  const getItems = () =>{
    
    const getItems = cant.reduce((a,b)=>(a + b.cant),0)
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
