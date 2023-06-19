import { useAuth } from "@/hooks/useAuth";
import { cookies } from "next/headers";

export function getCookiesData(){

  const { setUser } = useAuth()

  const user = cookies().get('user')?.value
  const token = cookies().get('token')?.value

  if(user && token){
    setUser(user)
  }
}