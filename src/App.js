import React, { useState, useEffect } from 'react';
import './App.css'; // Importamos los estilos
import NavigationMenu from './components/NavigationMenu';
import HelpContent from './components/HelpContent';
import ImageDisplay from './components/ImageDisplay';
import WelcomeScreen from './components/WelcomeScreen';


function App() {
  // 1. Estados: La "memoria" de nuestra app
  const [helpData, setHelpData] = useState([]); // Guarda toda la info del JSON
  const [selectedSection, setSelectedSection] = useState(null); // Guarda qué tema estamos viendo
  const [loading, setLoading] = useState(true); // ¿Estamos cargando datos?
  const [error, setError] = useState(null); // ¿Hubo un error?

  // 2. Efecto: Carga de datos al iniciar 
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        return response.json();
      })
      .then((data) => {
        setHelpData(data.sections); // Guardamos las secciones
        setLoading(false); // Terminó de cargar
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Hubo un error cargando la ayuda. " + err.message); // Manejo de errores
        setLoading(false);
      });
  }, []); // El array vacío [] significa "ejecuta esto solo una vez al montar"

  // 3. Renderizado: Qué mostramos al usuario
  if (loading) return <div className="loading">Cargando documentación...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app-container">
      {/* Barra superior estilo react.dev */}
      <header className="top-bar">React Help v1.0</header>
      
      <div className="main-layout">
        {/* Barra Lateral  */}
        <NavigationMenu 
          sections={helpData} 
          onSelectSection={setSelectedSection} 
          activeId={selectedSection?.id}
        />
        {selectedSection ? (<HelpContent data={selectedSection} />) : (<WelcomeScreen />)}
      </div>
    </div>
  );
}

export default App;