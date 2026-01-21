const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <h1>¡Bienvenido/a a tu Ayuda de React!</h1>
      <p>
        Esta aplicación te ayudará a entender los conceptos básicos de React.
      </p>
      <div className="instructions">
        <h3>¿Cómo empezar?</h3>
        <p>Selecciona un tema en el menú de la izquierda para ver su contenido.</p>
      </div>
      {/* Icono decorativo de React girando (opcional) */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" 
        className="react-logo-spin"
        alt="Logo React" 
      />
    </div>
  );
};
export default WelcomeScreen;