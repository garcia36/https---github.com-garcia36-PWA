import React from "react";
import '../assets/testimonio.css';

function Testimonio(props) {
    return ( 
        <div className = "App" >
            <div className="contenedor-testimonio" >
                <div className="contenedor-testimonio-img" >
                    <img className="imagen-testimonio"  src={require(`../assets/imagenes/testimonio-${props.imagen}.png`)} alt="img-emma" />
                </div>
                <div className='contenedor-text-testimonio' >
                    <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                    <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
                    <p className='texto-testimonio'>{props.texto}</p>
                </div>
            </div>
         </div>
    );
}

export default Testimonio;