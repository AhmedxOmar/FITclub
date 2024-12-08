import React, { createContext, useState, useContext } from 'react';

const SideCartContext = createContext();

export const SideCartProvider = ({ children }) => {
  const [isSideCartOpen, setIsSideCartOpen] = useState(false);

  const toggleSideCart = () => {
    setIsSideCartOpen(!isSideCartOpen);
  };

  return (
    <SideCartContext.Provider value={{ isSideCartOpen, toggleSideCart }}>
      {children}
    </SideCartContext.Provider>
  );
};

export const useSideCart = () => useContext(SideCartContext);
