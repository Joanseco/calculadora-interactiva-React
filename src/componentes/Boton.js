import React from 'react';
import "../hojas-de-estilo/Boton.css"

function Boton(props){

  //esta constante devuelve un valor Booleano que determina si cumple las 3 condiciones, Si lo hace devuelve un si y se determinara en el return que clase(css) se le aplicara con el operador ternario, si cumple la condicion se le añadira la clase 'operador' y si no no se le aplicara un cambio vacio '', luego el trimEnd() eliminara el espacio que se le aplica al "boton-contenedor "
  const esOperador= valor=>{
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }

  return(
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
    onClick={() => props.manejarClic(props.children)}>
      
      {props.children}
    </div>
  );
}

export default Boton;