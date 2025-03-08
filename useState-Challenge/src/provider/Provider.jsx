import { createContext } from "react";

export const BioContext = createContext();

export const Provider = ({ children }) => {
  const data = {
    name: "Mukit",
    age: 25,
  };
  return <BioContext.Provider value={data}>{children}</BioContext.Provider>;
};
