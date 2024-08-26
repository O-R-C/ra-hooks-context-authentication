const fetchData = async (url, options = {}) => {
  const result = {
    error: null,
    data: null,
  }

  const { method = 'GET', headers = {}, body = null } = options

  if (method === 'POST' && !body) {
    throw new Error('Body is required for POST requests')
  }

  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method,
      headers,
      body,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(response.statusText + ' (' + response.status + ')' + ' ' + (error ? error.message : ''))
    }

    const data = await response.json()
    result.data = data
  } catch (error) {
    result.error = error.message
  }
  return result
}

export default fetchData
