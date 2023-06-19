'use client'
import { api } from "@/api/api";
import { Children, User } from "@/types/types";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { cookies } from 'next/headers'
import { getCookiesData } from "@/lib/getUser";

interface Auth {
 signIn: (email: string, password: string) => void
 signOut: () => void
 signed: boolean
 setUser: Dispatch<SetStateAction<User | null>>
}

export const AuthContext = createContext<Auth>({} as Auth)

export const AuthProvider = ({ children }: Children) => {

  const [user, setUser] = useState({} as User | null);

  useEffect(() => {
    getCookiesData()
  }, [])

  async function signIn(email: string, password: string) {
    const response = await api.post('/register', {
      email,
      password
    })

    setUser(response.data.user)

    const { token } = response.data

    api.defaults.headers.common[ "Authorization" ] = `Bearer ${token}`

    cookies().set('token', token)
    cookies().set('user', response.data.user)

  }

  function signOut(){
    cookies().delete('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, signed: !!user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}