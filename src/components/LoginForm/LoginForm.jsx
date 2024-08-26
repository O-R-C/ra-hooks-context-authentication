import { useContext, useRef } from 'react'
import AuthContext from '../../contexts/AuthContext'
import styles from './LoginForm.module.css'

export default function LoginForm() {
  const { setLoginData } = useContext(AuthContext)
  const loginRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const result = {
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }

    loginRef.current.value = ''
    passwordRef.current.value = ''

    setLoginData(result)
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type='text'
            name='login'
            ref={loginRef}
            placeholder='Username'
          />
          <input
            className={styles.input}
            type='password'
            name='password'
            ref={passwordRef}
            placeholder='Password'
          />
        </div>
        <button
          className={styles.button}
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  )
}
