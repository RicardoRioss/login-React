import { useState } from "react"
import { useApi } from "../../hooks/useApi"
import { User } from "../../interfaces/User"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null)
  const api = useApi()

  //função de login
  const signin = async (email: string, password: string) => {
    //vai fazer uma requisição ao backend
    const data = await api.signin(email, password)
    if (data.user && data.token) {
      setUser(data.user)
      return true
    }
    return false
  }

  //função de logout
  const signout = async () => {
    await api.logout()
    setUser(null)
  }

  return(
    <AuthContext.Provider value = {{ user, signin, signout} }>
      { children }
    </AuthContext.Provider>
  )
}