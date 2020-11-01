import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'
import { useDispatch } from 'react-redux';
import { 
  makeStyles,
  Card, 
  CardHeader, 
  CardMedia,
  Avatar, 
  CardActions, 
  IconButton,
  CardActionArea
} from '@material-ui/core'

const DEFAULT_IMAGE = 'img/default-image.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: '#DBE2EB',
    color: '#011F4B',
    cursor: 'pointer'
  },
  image: {
    paddingTop: '120%'
  },
  avatar: {
    backgroundColor: '#011F4B',
    color: '#F7F9FD'
  }, 
  link: {
    textDecoration: 'none',
    color: '#011F4B'
  }
}))

const MovieCard = ({ id, title, vote_average, poster_path, release_date, index, liked}) => {
  const classes = useStyles(); 
  const dispatch =  useDispatch()

  const handleClick = () => {
    dispatch({
      type: 'UPDATE_MOVIES',
      payload: true,
      index: index
    })

    const movie = {id, title, vote_average, poster_path, release_date, index, liked}

    dispatch({
      type: 'ADD_FAVORITES',
      payload: movie
    })

    const favorites = JSON.parse(localStorage.getItem('favorites'))
    favorites.push(movie)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/movie_detail/${id}`} className={classes.link}>
          <CardMedia 
            className={classes.image}
	          image={ poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}` : DEFAULT_IMAGE }
            title={`${title} poster`}
          />
          <CardHeader 
	          avatar={<Avatar className={classes.avatar} aria-label="rating">{vote_average}</Avatar>}
            title={title}
            subheader={release_date}
          />
        </Link>
      </CardActionArea>
      <CardActions>
        {
          liked ? <IconButton aria-label="favorite button"><Favorite  /></IconButton>
          : <IconButton onClick={handleClick} aria-label="favorite button"><FavoriteBorder  /></IconButton>
        }
      </CardActions>
    </Card>
  )
}

export default MovieCard
