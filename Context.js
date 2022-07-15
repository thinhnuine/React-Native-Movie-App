
import React, { createContext, useState } from 'react'
export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false)
  const [isEdit,setIsEdit] = useState(false)
  return (
    <AppContext.Provider value={{isAuth, setIsAuth, isEdit, setIsEdit}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider