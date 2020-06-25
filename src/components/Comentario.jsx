import React from 'react'
import Imagen from './Imagen';

const Comentario = (props) => {
  return (
    <div>
      <h4>Caja de comentario</h4>
      <div className="media mt-4">
        <Imagen urlImagen={ props.urlImagen } />
        <div className="media-body">
        <h5 className="mt-0">{ props.persona }</h5>
          { props.texto }
        </div>
      </div>
    </div>
  )
}

export default Comentario
