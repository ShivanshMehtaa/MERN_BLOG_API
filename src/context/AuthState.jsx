import React, { useState } from 'react'
import Context from './AuthContext'

const AuthState = (props) => { 
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState("");
    const [id, setId] = useState("");
    
  return (
   <Context.Provider value={{
    isAuthenticated, setIsAuthenticated,
    user, setUser,
    id, setId
   }}>
   {props.children}
   </Context.Provider>
  )
}

export default AuthState;