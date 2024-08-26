import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import ProfileBar from '../ProfileBar/ProfileBar'
import LoginForm from '../LoginForm/LoginForm'
import styles from './Header.module.css'

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Neto Social</h2>
      {isAuthenticated && <ProfileBar />}
      {!isAuthenticated && <LoginForm />}
    </header>
  )
}
