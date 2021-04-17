import logo from './en-construccion.png';
import './App.css';
import React from 'react';
import NavBar from './component/navBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Compu Market' />
    </>
  );
}

export default App;
