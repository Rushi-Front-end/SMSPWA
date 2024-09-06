import React, { createContext, useState } from 'react';

// Create the context
export const IdContext = createContext();

// Create the provider component
export const IdProvider = ({ children }) => {
  const [id, setId] = useState(null); // This will hold the `id`

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};
