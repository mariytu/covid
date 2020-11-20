import { makeActionCreator } from '../../config/store/utils'
import { getSummary } from '../../services/covid'

export const GET_COVID_SUMMARY = 'GET_COVID_SUMMARY'
export const GET_COVID_SUMMARY_ERROR = 'GET_COVID_SUMMARY_ERROR'
export const GET_COVID_SUMMARY_SUCCESS = 'GET_COVID_SUMMARY_SUCCESS'

export const onGetCovidSummary = makeActionCreator(GET_COVID_SUMMARY)
export const onGetCovidSummaryError = makeActionCreator(GET_COVID_SUMMARY_ERROR, 'payload')
export const onGetCovidSummarySuccess = makeActionCreator(GET_COVID_SUMMARY_SUCCESS, 'payload')

export const onGetCovidSummaryThunk = () => async dispatch => {
  dispatch(onGetCovidSummary())

  try {
    const { data } = await getSummary({ actionType: GET_COVID_SUMMARY })

    return dispatch(
      onGetCovidSummarySuccess({
        countries: data?.Countries.map(country => {
          return {
            code: country.CountryCode,
            name: country.Country,
            slug: country.Slug,
            totalConfirmed: country.TotalConfirmed,
            totalDeaths: country.TotalDeaths,
            totalRecovered: country.TotalRecovered
          }
        })
      })
    )
  } catch (error) {
    return dispatch(onGetCovidSummaryError({ error }))
  }
}
