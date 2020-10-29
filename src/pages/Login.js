import React from 'react'
import './styles.css'
import FacebookLogin from 'react-facebook-login';
import { Container, Grid } from '@material-ui/core'

const responseFacebook = (response) => {
  console.log(response)
}

export const Login = () => {
  return (
    <Container className="main-cont">
      <Grid container justify="space-between" className="cont">
        <div>
          <h2 className="title">Welcome to MovieBucket</h2>
          <p className="desc">Here you can look for the movies you want to see and get a description, rating, <br/>watch the trailer and more. Please log in with Facebook to continue</p>
          <FacebookLogin 
            appId="1396011717456903"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div>
        <img className="cinemaSVG" src='/img/cinema.svg'/>
      </Grid>
      <div className="background">
        <img src="/img/back.svg"/>
      </div>
    </Container>
  )
}
