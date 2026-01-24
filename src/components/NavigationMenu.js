import React from 'react';

const NavigationMenu = ({ sections, onSelectSection, selectedId }) => {
  return (
    <nav className="sidebar">
      <h3>Temario</h3>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={selectedId === section.id ? 'active' : ''}
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