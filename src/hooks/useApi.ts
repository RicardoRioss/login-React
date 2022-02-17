import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    //resposta falsa
    return { 
      user: { id: 3, name: 'John', email: 'john@fake.com'}
    }


    const response = await api.post('/validate', { token });
    return response.data
  },
  signin: async (email: string, password: string) => {
    //resposta falsa
    return { 
      user: { id: 3, name: 'John', email: 'john@fake.com'},
      token: '1234567890'
    }
    const response = await api.post('/signin', { email, password });
    return response.data
    },
  logout: async () => {
    //retorno status fake
    return { status: true }
    const response = await api.post('/logout');
    return response.data
  }
})