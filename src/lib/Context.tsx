"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const ContextProvider = ({ children }: any) => {
  const [user, updateUser] = useState({});

  return (
    <Context.Provider value={{ user, updateUser }}>{children}</Context.Provider>
  );
};

export const useStore = () => {
  const context = useContext(Context);

  return context;
};
