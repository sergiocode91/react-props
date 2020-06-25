import React from 'react'

const Saludo = (props) => {

  return (
    <div>
      <h2>Saludando a { props.persona }</h2>
      <p>Edad: { props.edad }</p>
    </div>
  )
}

export default Saludo
