import './App.css';
import React from 'react';
import {CategoryContainer} from './container/categoryContainer';
import {Row, Col} from 'react-bootstrap';
import {ItemListContainer} from './container/ItemListContainer';
import {ItemDetailContainer} from './container/ItemDetailContainer';
import {Cart} from './container/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Cantidad} from './context/cartContext'
import {DbFirabase} from './context/cartFirabase'
function App() {

  return (
    <>
    <Cantidad>
      <DbFirabase>
      <BrowserRouter>
        <CategoryContainer/>
        
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
          <Route path="/">
            <Row>
                <Col className="text-center"> <h1>Bienvenidos a Compu Market</h1></Col>
            </Row>
            <ItemListContainer/>
          </Route>
            
        </Switch>
        
      </BrowserRouter> 
      </DbFirabase>
    </Cantidad>
    </>
  );
}

export default App;
