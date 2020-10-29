export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_FAVORITE': {
      return {...state, favoriteMovies: action.payload}
    }

    case 'SET_MOVIES': {
      return {...state, movies: action.payload}
    }
  }
}