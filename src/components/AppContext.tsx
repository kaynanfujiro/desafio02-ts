import { createContext, useEffect, useState } from "react"
import { createLocalStorage, getAlllocalStorage } from "../services/storage"

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
  }
  
  export const AppContext = createContext({} as IAppContext) //devolve um componente
  
  export const AppContextProvider = ({children}:any) => {
    const [ isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const storage = getAlllocalStorage()

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [])


    const user = 'kaynan'

    return(
      <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }