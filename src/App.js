import './App.css';
import React from 'react';
import NavBar from './component/navBar/NavBar';
import {Row, Col} from 'react-bootstrap';
import {ItemListContainer} from './container/ItemListContainer';
import {ItemDetailContainer} from './container/ItemDetailContainer';
import {Cart} from './container/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Cantidad} from './context/cartContext'
function App() {

  return (
    <>
    <Cantidad>
      <BrowserRouter>
        <NavBar/>
        
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
    </Cantidad>
    </>
  );
}

export default App;
