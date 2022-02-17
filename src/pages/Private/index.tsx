import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Private = () => {
  //pegar informações do usuario logado
  const auth = useContext(AuthContext)

  return (
    <div>
      <h2>Dasboard</h2>

      <p>Hello {auth.user?.name}, it's good to see you again!</p> 
    </div>
  )
}