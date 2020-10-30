export function moviesReducer (state, action) {
  switch(action.type) {
    case 'SET_FAVORITE': {
      return {...state, favoriteMovies: action.payload}
    }

    case 'SET_MOVIES': {
      return {...state, movies: action.payload}
    }

    case 'SET_USER_AUTHENTICATION': {
      return {...state, user: action.payload}
    }

    default: {
      return state
    }
  }
}