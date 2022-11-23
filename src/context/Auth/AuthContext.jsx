import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}