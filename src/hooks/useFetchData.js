import { useState, useEffect } from 'react'
import fetchData from '../js/fetchData'

export default function useFetchData(url, options = {}, seconds = 2) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  setIsLoading(true)
  useEffect(() => {
    const timer = setTimeout(async () => {
      const result = await fetchData(url, options)

      result.error && setError(result.error)
      result.data && setData(result.data)

      setIsLoading(false)
    }, seconds * 1000)

    return () => clearTimeout(timer)
  }, [url, seconds, options])

  return [data, error, isLoading]
}
