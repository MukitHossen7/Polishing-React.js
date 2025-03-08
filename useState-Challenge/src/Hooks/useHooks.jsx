import { useContext } from "react";
import { BioContext } from "../provider/Provider";

const useHooks = () => {
  const data = useContext(BioContext);
  return data;
};

export default useHooks;
