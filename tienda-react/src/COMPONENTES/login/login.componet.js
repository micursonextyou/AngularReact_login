import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

import { AuthContext } from "../../SERVICIOS/autenticar.js";



import '../login/login.componet.css';
import {Link} from 'react-router-dom';
import db from '../../SERVICIOS/fireconfig';

import { async } from 'q';


/*class Login extends React.Component{
    state={}
     
    handleSubmit= e=>{
       e.preventDefault()
                
    }
    handleChange=e=>{       
        this.setState({...this.state,[e.target.name]:e.target.value })            
    }*/
    const Login = ({ history }) => {
        const handleLogin = useCallback(
          async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
              await db
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
              history.push("/catalogo");
            } catch (error) {
              alert(error);
            }
          },
          [history]
        );
      
        const { currentUser } = useContext(AuthContext);
      
        if (currentUser) {
          return <Redirect to="/catalogo" />;
        }




    
   ///// render(){
        return (
            <div className="contenedor-login">
                <div className="login">
                    <div className="form">
                        <form className="login-form" onSubmit={handleLogin}>
                            <input type="email" placeholder="Direccion Correo" required name="email"  />
                            <input type="password" placeholder="Clave" required name="password"  />
                            <button type="submit">Ingresar</button>
                            <p className="message">Estas registrado? <Link to="#">Crear una cuenta</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }



//export default Login
export default withRouter(Login);