import PropTypes from 'prop-types'
import styles from './ErrorElement.module.css'

export default function ErrorElement({ error }) {
  return <div className={styles.error}>{error}</div>
}

ErrorElement.propTypes = {
  error: PropTypes.string,
}
