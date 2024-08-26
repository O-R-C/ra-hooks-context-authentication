import { createContext } from 'react'

const AuthContext = createContext({
  user: null,
  token: null,
  profile: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})

export default AuthContext
