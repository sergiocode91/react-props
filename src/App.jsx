import React from 'react';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="container mt-5">
      <h1>React Props</h1>
      <Saludo 
        persona='Sergio' 
        edad={28} 
      />
      <Saludo 
        persona='Juanito' 
        edad={23} 
      />
      <Saludo 
        persona='Pedrito' 
        edad={18} 
      />
      <hr/>
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Sergio'
        texto='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      />
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Juanito'
        texto='Lorem ipsum dolor sit amet consectetur.'
      />
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Pedrito'
        texto='Lorem ipsum dolor sit amet consectetur adipisicing.'
      />
    </div>
  );
}

export default App;
