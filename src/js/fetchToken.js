import fetchData from './fetchData'

const fetchToken = async ({ loginData, setToken, setError }) => {
  const result = await fetchData('/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })

  if (result.error) {
    setError(result.error)
  } else {
    setToken(result.data.token)
  }
}

export default fetchToken
