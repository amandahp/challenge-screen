import React from 'react'
import { Route } from 'react-router-dom'

export const PublicRoute = (props) => {
  return (
    <>
      <Route path={props.path} component={props.component} exact />
    </>
  )
}
