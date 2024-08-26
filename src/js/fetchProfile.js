import fetchData from './fetchData'

const fetchProfile = async ({ token, setProfile, setError, login }) => {
  const result = await fetchData('/private/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (result.error) {
    setError(result.error)
  } else {
    setProfile(result.data)
    login()
  }
}

export default fetchProfile
