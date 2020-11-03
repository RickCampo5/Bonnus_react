import React from 'react'
import { useSelector } from 'react-redux';
import {makeStyles, Container, Avatar, Grid } from '@material-ui/core'
import MovieCard from '../components/MovieCard/index';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '80px',
    backgroundColor: '#DBE2EB',
    paddingBottom: '5%'
  },
  name: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: '3em'
  },
  favorites: {
    paddingBottom: '5%'
  }
}))

export const UserProfile = () => {
  const classes = useStyles(); 
  const user = useSelector(state => state.user)
  const movies = useSelector(state => state.favoriteMovies)

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid item display="flex" >
              <Avatar>
                <img src={user.picture.data.url} alt="profile picture"/>
              </Avatar>
              <h3 className={classes.name}>{ user.name }</h3>
              <span>{user.email}</span>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container className={classes.favorites}>
        <h2 className="main-title">My Favorites</h2>
        <Grid container spacing={2} >
          {
            movies.map(({id, title, vote_average, poster_path, release_date, liked, update}, index) => {
              return (
                <Grid key={id} item xs={6} sm={3} > 
                  <MovieCard
                    update={update}
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
    </React.Fragment>
  )
}
