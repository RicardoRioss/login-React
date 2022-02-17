import { useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi"
import { User } from "../../interfaces/User"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null)
  const api = useApi()

  useEffect(() =>{
    const validateToken = async () => {
      const storageData = localStorage.getItem ('authToken')
      if (storageData) {
        const data = await api.validateToken(storageData)
        if (data.user) {
          setUser(data.user)
        }
      }
    }
    validateToken()
  }, [api])

  //função de login
  const signin = async (email: string, password: string) => {
    //vai fazer uma requisição ao backend
    const data = await api.signin(email, password)
    if (data.user && data.token) {
      setUser(data.user)
      setToken(data.token)
      return true
    }
    return false
  }

  //função de logout
  const signout = async () => {
    await api.logout()
    setUser(null)
    setToken('')
  }

  //salvar token no localstorege
  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
  }


  return(
    <AuthContext.Provider value = {{ user, signin, signout} }>
      { children }
    </AuthContext.Provider>
  )
}