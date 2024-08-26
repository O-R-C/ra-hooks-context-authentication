import PropTypes from 'prop-types'
import NewsItem from '../NewsItem/NewsItem'
import styles from './News.module.css'

export default function News({ news }) {
  return (
    <div className={styles.news}>
      {news &&
        news.map((item) => (
          <NewsItem
            key={item.id}
            {...item}
          />
        ))}
    </div>
  )
}

News.propTypes = {
  news: PropTypes.array,
}
