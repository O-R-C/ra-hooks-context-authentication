import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import styles from './ProfileBar.module.css'

export default function ProfileBar() {
  const {
    profile: { avatar, name },
    logout,
  } = useContext(AuthContext)

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <p className={styles.username}>{'Hello, ' + name}</p>
        <img
          className={styles.avatar}
          src={avatar}
          alt='avatar'
        />
      </div>
      <button
        className={styles.button}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  )
}
