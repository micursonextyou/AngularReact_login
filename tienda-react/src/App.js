import React from 'react';

import 'materialize-css/dist/css/materialize.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './COMPONENTES/login/login.componet.js';
import Home from './COMPONENTES/home/home.componet.js';
import Carrito from './COMPONENTES/carrito/carrito.componet.js';
import {AuthProvider} from './SERVICIOS/autenticar.js';
import PrivateRoute from './SERVICIOS/privateRouter'
import {CarritoProvider} from './CONTEXT/carritoContect.js';
import Modal from './COMPONENTES/popup/popup.component.js';


function App() {

    
  return (
    <CarritoProvider>
      <AuthProvider>
     
        <BrowserRouter>
            <Switch>
                
                <PrivateRoute  exact path="/catalogo" component={Home}/>
                <Route  exact path="/" component={Login}/>
                <Route  exact path="/carrito" component={Carrito}/>

            </Switch>
            <Modal/>     
        </BrowserRouter>      
      </AuthProvider>  
      </CarritoProvider>
    
  );
}

export default App;
