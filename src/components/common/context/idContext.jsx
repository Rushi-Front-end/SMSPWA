// IdContext.js
import React, { createContext, useContext, useState } from 'react';

export const IdContext = createContext();

export const IdProvider = ({ children }) => {
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [prakalpName, setPrakalpName] = useState(null);

  return (
    <IdContext.Provider value={{ id, setId, name, setName, prakalpName, setPrakalpName }}>
      {children}
    </IdContext.Provider>
  );
};

export const useSchoolId = () => {
  return useContext(IdContext);
};
