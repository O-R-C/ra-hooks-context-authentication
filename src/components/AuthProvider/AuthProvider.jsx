import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import fetchNews from '../../js/fetchNews'
import fetchToken from '../../js/fetchToken'
import fetchProfile from '../../js/fetchProfile'
import AuthContext from '../../contexts/AuthContext'
import Storage from '../../js/classes/Storage'

const storage = new Storage()

export default function AuthProvider({ children }) {
  const [news, setNews] = useState(null)
  const [error, setError] = useState(null)
  const [token, setToken] = useState(storage.get('token') || null)
  const [profile, setProfile] = useState(storage.get('profile') || null)
  const [loginData, setLoginData] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(token !== null)

  token && storage.set('token', token)
  profile && storage.set('profile', profile)

  const login = () => setIsAuthenticated(true)
  const logout = () => {
    setIsAuthenticated(false)
    setToken(null)
    setProfile(null)
    setLoginData(null)
    storage.remove('token')
    storage.remove('profile')
  }

  const clearError = () => setError(null)

  useEffect(() => {
    if (!token && loginData) {
      fetchToken({ loginData, setToken, setError })
    }

    if (!profile && token) {
      fetchProfile({ token, setProfile, setError, login })
    }

    if (!news && token) {
      fetchNews({ token, setNews, setError })
    }
  }, [token, profile, news, loginData])

  const value = { setLoginData, isAuthenticated, login, logout, token, profile, error, clearError, news }

  return <AuthContext.Provider value={{ ...value }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}
