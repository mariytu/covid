import { REACT_APP_API_BASE_URL } from '../config/settings/environment'
import { getJsonRequest } from '../modules/requests/requests'
import { factoryService } from '../modules/requests/services'

/**
 * Gets a summary of new and total cases per country.
 */
export const getSummary = factoryService(() => {
  return getJsonRequest(`${REACT_APP_API_BASE_URL}/summary`)
})

/**
 * Gets a list of cases per country per province by case type.
 * Returns all cases by case type for a country. Country must be the
 * country_slug from /countries. Cases must be one of: confirmed, recovered, deaths.
 */
export const getCasesPerCountry = factoryService(({ slug }) => {
  return getJsonRequest(`${REACT_APP_API_BASE_URL}/country/${slug}`)
})
