import { createContext,useState } from "react";

export const AutenticacaoContext=createContext({ })

export function AutenticacaoProvider({children}){
const [usuario, setUsuario]= useState({})

function login(email,senha){
  if(email=='victor09avila@hotmail.com' && senha=='123'){
setUsuario({
  nome:'Victor',
  email: email,
  endereco:'Rua Otto rehn 564',
  telefone:'991528230'
})

return 'ok' 
  }else{
    return 'Email ou senha invalidos'
  }
}
  

  return(

    <AutenticacaoContext.Provider value={{
   usuario,
   login,


    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}