import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  iframe: {
    width: '100%',
    height: '500px'
  }
}))

export const VideoPlayer = ({ id }) => {
  const classes = useStyles(); 

  return (
    <div>
      {
        id && <iframe className={classes.iframe}  src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      }
    </div>
  )
}
