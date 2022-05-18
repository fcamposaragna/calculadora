import { useState } from 'react';
import { evaluate } from 'mathjs'

import './App.css';
import Boton from './components/Boton';
import Screen from './components/Screen';
import BotonClear from './components/BotonClear';

function App() {

  const [ input, setInput ] = useState('');

  const addInput = ( value )=>{
    setInput(input + value);
  };

  const result = ()=>{
    if( input ){
      setInput( evaluate(input) ) 
    }else{
      alert('¡Debes colocar un número primero!')
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Screen input={ input }/>
        <div className="fila">
          <Boton handleClick={ addInput }>7</Boton>
          <Boton handleClick={ addInput }>8</Boton>
          <Boton handleClick={ addInput }>9</Boton>
          <Boton handleClick={ addInput }>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={ addInput }>4</Boton>
          <Boton handleClick={ addInput }>5</Boton>
          <Boton handleClick={ addInput }>6</Boton>
          <Boton handleClick={ addInput }>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={ addInput }>1</Boton>
          <Boton handleClick={ addInput }>2</Boton>
          <Boton handleClick={ addInput }>3</Boton>
          <Boton handleClick={ addInput }>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={ result }>=</Boton>
          <Boton handleClick={ addInput }>0</Boton>
          <Boton handleClick={ addInput }>.</Boton>
          <Boton handleClick={ addInput }>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handleClear={ ()=> setInput('') }>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
