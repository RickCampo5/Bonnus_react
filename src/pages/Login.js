import React from 'react'
import './styles.css'
//import FacebookLogin from 'react-facebook-login';
import {Redirect} from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
  const isAuth = useSelector(state => {
    return state.user
  })
  const dispatch = useDispatch() 
  const responseFacebook = (response) => {
    // const user = {name: 'Ricardo'}


    dispatch({
      type: 'SET_USER_AUTHENTICATION',
      payload: true
    })
  }

  if(isAuth) return (<Redirect to="/" />)

  return (
    <Container>
      <Grid container justify="space-between" className="cont">
        <div>
          <h2 className="title">Welcome to MovieBucket</h2>
          <p className="desc">Here you can look for the movies you want to see and get a description, rating, <br/>watch the trailer and more. Please log in with Facebook to continue</p>
          <button className="facebookButton" onClick={responseFacebook}>Login</button>
          {/* <FacebookLogin 
            appId="1396011717456903"
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="facebookButton"
          /> */}
        </div>
        <img className="cinemaSVG" src='/img/cinema.svg' alt="cinema SVG"/>
      </Grid>
      <div className="background">
        <img src="/img/back.svg" alt="bubble background"/>
      </div>
    </Container>
  )
}
