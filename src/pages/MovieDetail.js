import React, { useEffect } from 'react'
import { Container, Grid, Avatar, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  banner: {
    marginBottom: '5%',
    padding: '3% 1%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    marginTop: '70px',
    color: '#011F4B'
  },
  avatar: {
    backgroundColor: '#011F4B',
    color: '#F7F9FD',
    fontSize: '2em',
    width: '60px',
    height: '60px'
  },
  bannerGrid: {
    position: 'relative',
    zIndex: '2'
  },
  overlay: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#07D3E3',
    opacity: '0.8',
    zIndex: '0'
  },
  title: {
    fontSize: '2.3em'
  }
}))

export const MovieDetail = (props) => {
  const classes = useStyles(); 
  const movie = useSelector(state => state.movie)
  const dispatch = useDispatch()
  console.log(movie)
  
  useEffect(() => {
    const id = props.match.params.id
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=1`

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data =>{
        console.log(data.title)
        dispatch({
          type: 'SET_MOVIE',
          payload: data
        })
      })
  }, [dispatch])

  return (
    <React.Fragment>
      <div 
        className={classes.banner}
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie.poster_path})`}}
      >
        <Container className={classes.bannerGrid}>
          <Grid container spacing={3}>
            <Grid item>
              <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title} poster`}/>
              <h2 className={classes.title}>
                {movie.title}
              </h2>
            </Grid>
            <Grid item xs={6}>
              <Avatar className={classes.avatar} aria-label="rating">{movie.vote_average}</Avatar>
              <p>{movie.overview}</p>
              <ul>
                <li>Release Date: {movie.release_date}</li>
                <li>Runtime: {movie.runtime}</li>
                <li>Generes: { movie && movie.genres.map(genre => (<span key={genre.id}> {genre.name} </span>)) }</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.overlay}></div>
      </div>
      <Container>
        
      </Container>
    </React.Fragment>
  )
}