'use client'
import { api } from "@/api/api";
import { Children, User } from "@/types/types";
import { createContext, useEffect, useState } from "react";

interface Auth {
 signIn: (email: string, password: string) => void
 signOut: () => void
 signed: boolean
}

export const AuthContext = createContext<Auth>({} as Auth)

export const AuthProvider = ({ children }: Children) => {

  const [user, setUser] = useState({} as User | null);

  useEffect(() => {
    function getStoragedData(){

      const user = localStorage.getItem('user')
      const token = localStorage.getItem('token')
    
      if(user && token){
        setUser(user)
      }
    }

    getStoragedData()
  }, [])

  async function signIn(email: string, password: string) {
    const response = await api.post('/register', {
      email,
      password
    })

    setUser(response.data.user)

    const { token } = response.data

    api.defaults.headers.common[ "Authorization" ] = `Bearer ${token}`

    localStorage.setItem('token', token)
    localStorage.setItem('user', response.data.user)

  }

  function signOut(){
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, ...user, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}