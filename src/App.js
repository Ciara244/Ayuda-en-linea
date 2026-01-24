import React, { useState, useEffect } from 'react';
import NavigationMenu from './components/NavigationMenu';
import HelpContent from './components/HelpContent';
import './App.css'; // Estilos para el diseño

function App() {
  const [helpData, setHelpData] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carga de datos desde JSON usando fetch 
  useEffect(() => {
   fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setHelpData(data.sections);
        // ESTA LÍNEA ES LA QUE HACE QUE SE VEA EL WELCOME AL INICIO:
        if (data.sections.length > 0) {
          setSelectedSection(data.sections[0]);
        }
        setLoading(false);
      })
      // Manejar posibles errores 
      .catch((err) => {
        console.error("Error cargando datos:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Cargando ayuda...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app-container">
      
      {/* Barra lateral  */}
      <NavigationMenu 
        sections={helpData} 
        onSelectSection={setSelectedSection} 
        selectedId={selectedSection ? selectedSection.id : null}
      />
      
      {/* Área principal de contenido */}
      <HelpContent data={selectedSection} />
    </div>
  );
}

export default App;