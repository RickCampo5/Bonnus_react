import React from 'react'
import './styles.css'
import FacebookLogin from 'react-facebook-login';
import {Redirect} from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
  const localUser = JSON.parse(localStorage.getItem('user'))
  const isAuth = useSelector(state => {return state.user})
  const dispatch = useDispatch() 
  
  const responseFacebook = (response) => {
    localStorage.setItem('user', JSON.stringify(response))
    
    dispatch({
      type: 'SET_USER_AUTHENTICATION',
      payload: response
    })
  }
  
  if(isAuth.id) return (<Redirect to="/" />)
  if(!isAuth.id && localUser) {
    dispatch({
      type: 'SET_USER_AUTHENTICATION',
      payload: localUser
    })

    return (<Redirect to="/" />)
  }

  return (
    <Container>
      <Grid container justify="space-between" className="cont">
        <div>
          <h2 className="title">Welcome to MovieBucket</h2>
          <p className="desc">Here you can look for the movies you want to see and get a description, rating, <br/>watch the trailer and more. Please log in with Facebook to continue</p>
          {/* <button className="facebookButton" onClick={responseFacebook}>Login</button> */}
          <FacebookLogin 
            appId={process.env.REACT_APP_FACEBOOK_API}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="facebookButton"
          />
        </div>
        <img className="cinemaSVG" src='/img/cinema.svg' alt="cinema SVG"/>
      </Grid>
      <div className="background">
        <img src="/img/back.svg" alt="bubble background"/>
      </div>
    </Container>
  )
}
