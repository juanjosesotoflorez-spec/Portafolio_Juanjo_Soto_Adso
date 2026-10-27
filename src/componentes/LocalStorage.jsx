import { useState, useEffect } from 'react';

function Recomendaciones() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  // 1. Inicializar el estado cargando lo que haya en localStorage
  const [recomendaciones, setRecomendaciones] = useState(() => {
    const guardadas = localStorage.getItem('recomendaciones');
    return guardadas ? JSON.parse(guardadas) : [];
  });

  // 2. Guardar en localStorage cada vez que la lista de recomendaciones cambie
  useEffect(() => {
    localStorage.setItem('recomendaciones', JSON.stringify(recomendaciones));
  }, [recomendaciones]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !mensaje.trim()) return;

    const nuevaRecomendacion = {
      id: Date.now(),
      nombre,
      mensaje
    };

    // Agregamos la nueva recomendación a la lista
    setRecomendaciones([nuevaRecomendacion, ...recomendaciones]);

    // Limpiamos los campos del formulario
    setNombre('');
    setMensaje('');
  };

  return (
    <div className="container mt-4 text-white">
      <h2>Deja una <span className="text-info">Recomendación</span></h2>

      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tu nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje o Recomendación</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Escribe tu recomendación..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar Recomendación
        </button>
      </form>

      {/* Lista donde se muestran las recomendaciones guardadas */}
      <div className="mt-4">
        <h3>Recomendaciones ({recomendaciones.length})</h3>
        {recomendaciones.map((item) => (
          <div key={item.id} className="card bg-dark text-white my-2 p-3 border-secondary">
            <h5>{item.nombre}</h5>
            <p>{item.mensaje}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recomendaciones;