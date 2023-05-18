import './App.css';
import jsLogo from './imagenes/js.png';
import Boton from './componentes/Boton';
import Input from './componentes/Input';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
// Le añadi funcionalidad con el paquete mathjs, que lo usare para las evaluaciones de las operaciones

function App() {

  const [input, setInput] =useState('');

  const agregarInput = val =>{
    setInput(input + val);
  }

  const calcularResultado = () => {
    if (input) {
      try {
        const resultado = evaluate(input);
        setInput(resultado);
      } catch (error) {
        alert("Expresión matemática inválida");
      }
    } else {
      alert("Ingresa valores");
    }
  }
  

  
  return (
    <div className='App'>
      

      <div className='contenedor-calculadora'>
        <Input input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>


    </div>
  );
}

export default App;
