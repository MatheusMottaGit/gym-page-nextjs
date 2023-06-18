import { api } from "@/api/api";
import { Children } from "@/types/types";
import { createContext } from "react";

interface Auth {
 signIn: (email: string, password: string) => void
}

export const AuthContext = createContext<Auth>({} as Auth)

export const AuthProvider = ({ children }: Children) => {

  async function signIn(email: string, password: string) {
    const response = await api.post('/register', {
      
    })
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  )
}