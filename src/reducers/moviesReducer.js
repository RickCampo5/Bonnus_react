import update from 'immutability-helper'

export function moviesReducer (state, action) {
  switch(action.type) {
    case 'ADD_FAVORITES': {
      return { ...state, favoriteMovies: [...state.favoriteMovies, action.payload]}
    }

    case 'UPDATE_MOVIES': {
      return update(state, { nowPlaying: { [action.index]: { liked: { $set: action.payload }}}})
    }

    case 'SET_NOW_PLAYING': {
      return {...state, nowPlaying: action.payload}
    }

    case 'SET_USER_AUTHENTICATION': {
      return {...state, user: action.payload}
    }

    default: {
      return state
    }
  }
}
