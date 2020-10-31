import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container } from '@material-ui/core'
import { MovieCard } from '../components/MovieCard'

export const Home = () => {
  const movies = useSelector(state => state.nowPlaying)
  const dispatch = useDispatch()
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=1`

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(movies => {
        dispatch({
          type: 'SET_NOW_PLAYING',
          payload: movies
        })
      })
      .catch(err => {
        console.log('There was an error:', err) 
      })
  }, [dispatch])

  return (
    <Container className="movie_container">
      <Grid container spacing={2} >
        <Grid item xs={6} sm={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MovieCard />
        </Grid>
      </Grid>
    </Container>
  )
}
