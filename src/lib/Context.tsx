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
  [key: string]: any;
}

interface IContext {
  user: null | User;
  accessToken: string;
  updateUser: Dispatch<SetStateAction<User | null>>;
  updateAccessToken: (token: string) => void;
  toggleHistory: () => void;
  showHistory: boolean;
}

const Context = createContext<IContext>({
  user: null,
  accessToken: "",
  updateUser: () => {},
  updateAccessToken: () => {},
  toggleHistory: () => {},
  showHistory: false,
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
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const updateAccessToken = (token: string) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
  };

  return (
    <Context.Provider
      value={{
        accessToken,
        user,
        updateUser,
        updateAccessToken,
        toggleHistory,
        showHistory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStore = () => {
  const context = useContext(Context);

  return context;
};
