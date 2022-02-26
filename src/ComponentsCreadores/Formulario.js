import "../Formulario.css";
import Iban from "./Iban";


export default function Formulario (props) {


	return (

        <div className= "formulario">

            <p>NIE/NIF</p>
            <input></input>
            <p>Teléfono de contacto</p>
            <input></input>
            <p>Domicilio</p>
            <input></input>
            <p>Codigo postal</p>
            <input></input>
            <p>Cuenta bancaria</p>
            <Iban/>
            <p>Resumen a evaluar</p>
            <div className="resumenformulario">
            <input></input>
            <button>Explorar fichero</button>
            </div>
            <p>Titulo del resumen</p>
            <input></input>
            <p>Descripción del resumen</p>
            <input></input>

            <button className="Enviar">Enviar</button>

        </div>      
       );	
}