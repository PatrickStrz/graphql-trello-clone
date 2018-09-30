import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { HomePage, BoardGql } from './features'

export const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/board/:id"
        component={({ match }) => <BoardGql id={match.params.id} />}
      />
    </React.Fragment>
  </BrowserRouter>
)
