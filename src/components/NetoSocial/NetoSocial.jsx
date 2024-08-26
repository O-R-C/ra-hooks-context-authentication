import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import Header from '../Header/Header'
import ErrorElement from '../ErrorElement/ErrorElement'
import styles from './NetoSocial.module.css'
import ContentMain from '../ContentMain/ContentMain'

export default function NetoSocial() {
  const { error, clearError } = useContext(AuthContext)
  if (error) {
    setTimeout(clearError, 3000)
    return <ErrorElement error={error} />
  }

  return (
    <div className={styles.netoSocial}>
      <Header />
      <ContentMain />
    </div>
  )
}
