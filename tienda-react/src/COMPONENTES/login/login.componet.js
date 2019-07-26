import React from 'react';
import '../login/login.componet.css';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.state);
        

    }
    render(){
        return (
            <div className="contenedor-login">
                <div className="login">
                    <div className="form">
                        <form className="login-form">
                            <input type="email" placeholder="Direccion Correo" required/>
                            <input type="password" placeholder="Clave" required/>
                            <button type="submit">Ingresar</button>
                            <p className="message">Estas registrado? <Link to="#">Crear una cuenta</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}
export default Login