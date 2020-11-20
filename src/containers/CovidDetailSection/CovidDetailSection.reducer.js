import { GET_COVID_DETAIL, GET_COVID_DETAIL_ERROR, GET_COVID_DETAIL_SUCCESS } from './CovidDetailSection.actions'

const covidSummaryState = {
  countries: {},
  country: {},
  error: false,
  loading: true
}

/**
 * The covid detail section reducer.
 */
const covidDetailReducer = (state = covidSummaryState, { payload, type }) => {
  switch (type) {
    case GET_COVID_DETAIL: {
      return { ...state, loading: true }
    }
    case GET_COVID_DETAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
        countries: payload.countries,
        country: payload.country
      }
    }
    case GET_COVID_DETAIL_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    default: {
      return state
    }
  }
}

export default covidDetailReducer
