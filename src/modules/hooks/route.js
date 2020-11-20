import { useLocation, useParams } from 'react-router-dom'

/**
 * Custom hook to get an URLSearchParams instance of the current query params.
 */
export const useQuery = () => {
  const location = useLocation()
  return new URLSearchParams(location.search)
}

export const usePathParam = param => {
  const params = useParams()
  return params[param]
}
