import { useState } from 'react'
import { ramos } from './data'
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState('')

  const copiarNRC = (nrc) => {
    navigator.clipboard.writeText(nrc)
      .then(() => {
        setMensaje(`¡NRC ${nrc} copiado!`)
        // Borrar el mensaje después de 2 segundos
        setTimeout(() => setMensaje(''), 2000)
      })
      .catch(err => {
        console.error('Error al copiar: ', err)
      })
  }

  return (
    <div className="container">
      <h1>🚀 Toma de Ramos Fast</h1>
      
      {mensaje && <div className="toast">{mensaje}</div>}

      <div className="grid">
        {ramos.map((ramo) => (
          <div key={ramo.id} className="card">
            <h3>{ramo.nombre}</h3>
            <p className="profe">Prof: {ramo.profe}</p>
            {/* Aquí agregamos el horario para que se vea */}
            <p className="horario">⏰ {ramo.horario}</p>
            
            <button 
              className="btn-copy" 
              onClick={() => copiarNRC(ramo.nrc)}
            >
              {ramo.nrc} 📋
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App