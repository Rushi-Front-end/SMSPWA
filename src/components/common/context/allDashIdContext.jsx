// IdContext.js
import React, { createContext, useContext, useState } from 'react';

export const AllDashIdContext = createContext();

export const AllDashIdProvider = ({ children }) => {
    const [dashId, setDashId] = useState({});
    const [dashIdCheck, setDashIdCheck] = useState(false);

  return (
    <AllDashIdContext.Provider value={{ dashId, setDashId, dashIdCheck, setDashIdCheck }}>
      {children}
    </AllDashIdContext.Provider>
  );
};

export const useDashId = () => {
  return useContext(AllDashIdContext);
};
