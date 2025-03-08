import { useContext } from "react";
import { BioContext } from "../provider/Provider";

export const useHooks = () => {
  const data = useContext(BioContext);
  return data;
};
