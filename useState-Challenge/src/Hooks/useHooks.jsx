import { use } from "react";
import { BioContext } from "../provider/Provider";

const useHooks = () => {
  const data = use(BioContext);
  return data;
};

export default useHooks;
