import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CovidDetailPage from './pages/CovidDetail'
import CovidSummaryPage from './pages/CovidSummary'
import NotFoundPage from './pages/NotFound'

/**
 * The Routes' component.
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/summary']} component={CovidSummaryPage} />
        <Route exact path="/details/:slug" component={CovidDetailPage} />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
