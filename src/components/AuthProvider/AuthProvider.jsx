import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import fetchNews from '../../js/fetchNews'
import fetchToken from '../../js/fetchToken'
import fetchProfile from '../../js/fetchProfile'
import AuthContext from '../../contexts/AuthContext'

export default function AuthProvider({ children }) {
  const [news, setNews] = useState(null)
  const [error, setError] = useState(null)
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loginData, setLoginData] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => setIsAuthenticated(true)
  const logout = () => {
    setIsAuthenticated(false)
    setToken(null)
    setProfile(null)
  }

  const clearError = () => setError(null)

  useEffect(() => {
    if (!token && loginData) {
      fetchToken({ loginData, setToken, setError })
    }

    if (!profile && token) {
      fetchProfile(token, setProfile, setError, login)
    }

    if (!news && token) {
      fetchNews(token, setNews, setError)
    }
  }, [token, profile, news, loginData])

  const value = { setLoginData, isAuthenticated, login, logout, token, profile, error, clearError, news }

  return <AuthContext.Provider value={{ ...value }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}
