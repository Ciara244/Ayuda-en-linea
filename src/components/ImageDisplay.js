const ImageDisplay = ({ src, alt }) => {
  if (!src) return null; // Si no hay ruta, no renderizamos nada
  return (
    <div className="image-container">
      <img src={src} alt={alt} style={{ maxWidth: '100%', borderRadius: '8px' }} />
    </div>
  );
};
export default ImageDisplay;