import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import News from '../News/News'
import Banner from '../Banner/Banner'
import styles from './ContentMain.module.css'

export default function ContentMain() {
  const { isAuthenticated, news } = useContext(AuthContext)
  return (
    <div className={styles.contentMain}>
      {!isAuthenticated && <Banner />}
      {isAuthenticated && <News news={news} />}
    </div>
  )
}
