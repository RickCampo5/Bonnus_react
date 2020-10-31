import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
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

export const MovieCard = ({ id, title, vote_average, poster_path }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to="/movie_detail/12654" className={classes.link}>
          <CardMedia 
            className={classes.image}
            image='https://image.tmdb.org/t/p/w342/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg'
            title='movie poster'
          />
          <CardHeader 
            avatar={<Avatar className={classes.avatar} aria-label="rating">5.5</Avatar>}
            title='DieHard'
            subheader='12/10/20'
          />
        </Link>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="favorite button">
          <FavoriteBorder />
        </IconButton>
      </CardActions>
    </Card>
  )
}
