import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(state => {
    return state.user
  })
  
  return <Route {...rest}  render={(props) => {
    return isAuth ? <Component {...props} />
    : <Redirect to="/login" />
  }}/>
}
