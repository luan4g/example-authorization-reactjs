import React, { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';

interface AuthContextData {
  signed: boolean,
  user: object | null,
  signIn(): Promise<void>,
  signOut(): void,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = (props) => {
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@RJSAuth:user')
    const storagedToken = localStorage.getItem('@RJSAuth:token')

    if(storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser))

      api.defaults.headers['Authorization'] = `Bearer ${storagedUser}`
    }
  }, [])

  async function signIn() {
    const { token, user } = await auth.signin();
    
    setUser(user);

    api.defaults.headers['Authorization'] = `Bearer ${token}`
    
    localStorage.setItem('@RJSAuth:user', JSON.stringify(user));
    localStorage.setItem('@RJSAuth:token', token)
  }

  function signOut() {
    localStorage.clear()

    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;