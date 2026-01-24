import React from 'react';
import ImageDisplay from './ImageDisplay';
import '../App.css'; // Importamos los estilos

const HelpContent = ({ data }) => {
  if (!data) {
    return <div className="placeholder">Selecciona un tema para comenzar.</div>;
  }

  return (
    <main className="content-area">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      
      {/* Reutilizamos el componente de imagen dentro del contenido */}
      <ImageDisplay src={data.image} alt={`Imagen de ${data.title}`} />
    </main>
  );
};

export default HelpContent;