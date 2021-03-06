import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container } from '@material-ui/core'
import MovieCard from '../components/MovieCard'
import setFavorites from '../helpers/setFavorites'

export const Home = () => {
  const movies = useSelector(state => state.nowPlaying)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=1`

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const { movies, favorites } = setFavorites(data.results)

        dispatch({
          type: 'SET_NOW_PLAYING',
          payload: movies
        })

        if(favorites) {
          dispatch({
            type: 'ADD_FAVORITES',
            payload: favorites
          })
        }
      })
      .catch(err => {
        console.log('There was an error:', err) 
      })
  }, [dispatch])

  return (
    <Container className="movie_container">
      <h2 className="main-title">Now Playing</h2>
      <Grid container spacing={2} >
        {
          movies.map(({id, title, vote_average, poster_path, release_date, liked}, index) => {
            return (
              <Grid key={id} item xs={6} sm={3} > 
                <MovieCard
                  update='UPDATE_MOVIES'
                  liked={liked}
                  index={index}
                  id={id}
                  title={title}
                  vote_average={vote_average}
                  poster_path={poster_path}
                  release_date={release_date}
                />
              </Grid>
            )
          })
        }
     </Grid>
    </Container>
  )
}
