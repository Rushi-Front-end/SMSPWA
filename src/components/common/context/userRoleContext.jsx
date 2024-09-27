// IdContext.js
import React, { createContext, useContext, useState } from 'react';

export const UserRoleNameContext = createContext();

export const UserRoleNameProvider = ({ children }) => {
    const [userRoleName, setUserRoleName] = useState([]);

  return (
    <UserRoleNameContext.Provider value={{ userRoleName, setUserRoleName }}>
      {children}
    </UserRoleNameContext.Provider>
  );
};

export const useLoginName = () => {
  return useContext(UserRoleNameContext);
};
