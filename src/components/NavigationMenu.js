const NavigationMenu = ({ sections, onSelectSection, activeId }) => {
  return (
    <nav className="sidebar">
      <h3>Temas</h3>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button 
              className={activeId === section.id ? "active" : ""}
              onClick={() => onSelectSection(section)}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavigationMenu;