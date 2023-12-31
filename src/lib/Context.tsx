"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  [key: string]: string;
}

interface IContext {
  user: null | User;
  accessToken: string;
  updateUser: Dispatch<SetStateAction<User | null>>;
  updateAccessToken: (token: string) => void;
}

const Context = createContext<IContext>({
  user: null,
  accessToken: "",
  updateUser: () => {},
  updateAccessToken: () => {},
});

const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage?.getItem("accessToken") ?? "";
  }
  return "";
};

export const ContextProvider = ({ children }: any) => {
  const [user, updateUser] = useState<null | User>(null);
  const [accessToken, setAccessToken] = useState<string>(getAccessToken());

  const updateAccessToken = (token: string) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
  };

  return (
    <Context.Provider
      value={{ accessToken, user, updateUser, updateAccessToken }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStore = () => {
  const context = useContext(Context);

  return context;
};
