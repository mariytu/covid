import { makeActionCreator } from '../../config/store/utils'
import { formatDate, formatNumeric } from '../../modules/utils/formatters'
import { getCasesPerCountry } from '../../services/covid'

export const GET_COVID_DETAIL = 'GET_COVID_DETAIL'
export const GET_COVID_DETAIL_ERROR = 'GET_COVID_DETAIL_ERROR'
export const GET_COVID_DETAIL_SUCCESS = 'GET_COVID_DETAIL_SUCCESS'

export const onGetCovidDetail = makeActionCreator(GET_COVID_DETAIL)
export const onGetCovidDetailError = makeActionCreator(GET_COVID_DETAIL_ERROR, 'payload')
export const onGetCovidDetailSuccess = makeActionCreator(GET_COVID_DETAIL_SUCCESS, 'payload')

export const onGetCovidDetailThunk = payload => async (dispatch, getState) => {
  dispatch(onGetCovidDetail())

  console.log('actions')
  console.log(payload.slug)

  try {
    // Getting the countries from redux store
    const {
      covidDetail: { countries }
    } = getState()

    // Validate if the requested country is in the redux store
    if (countries[payload.slug]) {
      // FIXME: Requires a validation with the date of the last data to know if it needs to gets the data again or not
      return dispatch(
        onGetCovidDetailSuccess({
          countries,
          country: countries[payload.slug]
        })
      )
    }

    const { data } = await getCasesPerCountry({ actionType: GET_COVID_DETAIL, slug: payload.slug })

    const country = {
      history: data?.map(info => {
        return {
          active: formatNumeric(info.Active),
          confirmed: formatNumeric(info.Confirmed),
          deaths: formatNumeric(info.Deaths),
          recovered: formatNumeric(info.Recovered),
          date: formatDate(info.Date, 'dd-MM-yyyy')
        }
      }),
      slug: payload.slug,
      name: data[0]?.Country
    }

    return dispatch(
      onGetCovidDetailSuccess({
        countries: {
          ...countries,
          [payload.slug]: country
        },
        country
      })
    )
  } catch (error) {
    return dispatch(onGetCovidDetailError({ error }))
  }
}
