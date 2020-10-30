import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const Home = () => {
  const isAuth = useSelector(state => {
    return state.user
  })

  return isAuth ? <Redirect to="/now_playing" /> : <Redirect to="/login" />
}
