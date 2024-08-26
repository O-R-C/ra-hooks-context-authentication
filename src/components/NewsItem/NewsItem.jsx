import PropTypes from 'prop-types'
import styles from './NewsItem.module.css'

export default function NewsItem({ content, title, image }) {
  return (
    <div className={styles.newsItem}>
      <img
        className={styles.image}
        src={image}
        alt={title}
      />

      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  )
}

NewsItem.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}
