import React, { useState } from 'react';

const Accordion: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={`accordion-section ${isOpen ? 'open' : ''}`}>
      <div onClick={toggleAccordion} style={{ cursor: 'pointer', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
        <strong>{title}</strong>
      </div>
      {isOpen && children}
    </div>
  );
};

export default Accordion;