import './App.css';
import React from 'react';
import {CategoryContainer} from './container/categoryContainer';
import {Container} from 'react-bootstrap';
import {ItemListContainer} from './container/ItemListContainer';
import {ItemDetailContainer} from './container/ItemDetailContainer';
import {Cart} from './container/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Cantidad} from './context/cartContext'
import {DbFirabase} from './context/cartFirabase'
import FormContainer from './container/FormContainer'
import OrdenesContainer from './container/OrdenesContainer'
import {FooterContainer} from './container/FooterContainer'
function App() {

  return (
    <>
    <Cantidad>
      <DbFirabase>
      <BrowserRouter>
        <CategoryContainer/>
        <Container>
        <Switch>
          
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:idProducto">
            <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
              <Cart/>
          </Route>
          <Route path="/formulario">
            <FormContainer/>
          </Route>
          <Route path="/ordenes">
            <OrdenesContainer/>
          </Route>
          <Route path="/">
            <ItemListContainer/>
          </Route>
        
        </Switch>
        </Container> 
        <FooterContainer/> 
      </BrowserRouter> 
      </DbFirabase>
    </Cantidad>
    </>
  );
}

export default App;
