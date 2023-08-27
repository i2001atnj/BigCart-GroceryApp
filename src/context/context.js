import { useContext, createContext } from "react";

export const userContext = createContext();
export const user = useContext(userContext);
