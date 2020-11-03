import React, { useEffect } from 'react'
import { Container, Grid, Avatar, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { VideoPlayer } from '../components/VideoPlayer/index';
const queryString = require('query-string');

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
  },
  videoCont: {
    paddingBottom: '5%'
  },
  videoItem: {
    width: '80%'
  }
}))

export const MovieDetail = (props) => {
  const classes = useStyles(); 
  const movie = useSelector(state => state.movie)
  const video = useSelector(state => state.video)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const id = props.match.params.id
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=1`
    const videoURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=1&append_to_response=videos`

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data =>{
        dispatch({
          type: 'SET_MOVIE',
          payload: data
        })
      })

      fetch(videoURL)
        .then(res => {
          return res.json()
        })
        .then(data => {
          dispatch({
            type: 'SET_VIDEO',
            payload: data.results[0]
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
            <Grid item xs={4}>
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
                <li>Generes: { movie.genres && movie.genres.map(genre => (<span key={genre.id}> {genre.name} </span>)) }</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.overlay}></div>
      </div>
      <Container className={classes.videoCont}>
        <h3 className={classes.title}>Movie trailer</h3>
        <Grid container justify="center">
          <Grid item className={classes.videoItem}>
            <VideoPlayer id={video.key} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
