import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>Neto Social</h1>
      <p className={styles.text}>A simple social network</p>
    </div>
  )
}
