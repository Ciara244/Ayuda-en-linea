import React from 'react';
import ImageDisplay from './ImageDisplay';

const HelpContent = ({ data }) => {
  if (!data) return <div className="welcome">Selecciona un tema para empezar.</div>;

  return (
    <main className="content-area">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      {/* Aquí usamos el componente de imagen que creamos antes */}
      <ImageDisplay src={data.image} alt={data.title} />
    </main>
  );
};
export default HelpContent;