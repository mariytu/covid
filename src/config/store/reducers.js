import { combineReducers } from 'redux'
import covidDetailReducer from '../../containers/CovidDetailSection/CovidDetailSection.reducer'
import covidSummaryReducer from '../../containers/CovidSummarySection/CovidSummarySection.reducer'

export default combineReducers({
  covidDetail: covidDetailReducer,
  covidSummary: covidSummaryReducer
})
