import fetchData from './fetchData'

const fetchNews = async ({ token, setNews, setError }) => {
  const result = await fetchData('/private/news', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (result.error) {
    setError(result.error)
  } else {
    setNews(result.data)
  }
}

export default fetchNews
