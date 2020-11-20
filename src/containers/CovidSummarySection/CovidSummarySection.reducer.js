import { GET_COVID_SUMMARY, GET_COVID_SUMMARY_ERROR, GET_COVID_SUMMARY_SUCCESS } from './CovidSummarySection.actions'

const covidSummaryState = {
  countries: [],
  error: false,
  loading: true
}

/**
 * The covid summary section reducer.
 */
const covidSummaryReducer = (state = covidSummaryState, { payload, type }) => {
  switch (type) {
    case GET_COVID_SUMMARY: {
      return { ...state, loading: true }
    }
    case GET_COVID_SUMMARY_SUCCESS: {
      return {
        ...state,
        loading: false,
        countries: payload.countries
      }
    }
    case GET_COVID_SUMMARY_ERROR: {
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

export default covidSummaryReducer
