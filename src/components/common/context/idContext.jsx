// IdContext.js
import React, { createContext, useState } from 'react';

export const IdContext = createContext();

export const IdProvider = ({ children }) => {
    const [id, setId] = useState(1);
    console.log(id, "IDCONTENT")

  localStorage.setItem("schoolId", id)

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};
