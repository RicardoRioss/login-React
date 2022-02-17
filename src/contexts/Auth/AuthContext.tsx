// criando contexto
import { createContext } from "react";
import { User } from "../../interfaces/User";

//criando interface para
export interface AuthContextType {
  user: User | null
  signin: (email: string, password: string) => Promise<boolean>
  signout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)