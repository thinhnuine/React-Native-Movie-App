
import React, { createContext, useState } from 'react'
export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AppContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider