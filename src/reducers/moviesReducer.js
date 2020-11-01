import update from 'immutability-helper'

export function moviesReducer (state, action) {
  switch(action.type) {
    case 'ADD_FAVORITES': {
      return { ...state, favoriteMovies: [...state.favoriteMovies, action.payload]}
    }

    case 'UPDATE_MOVIES': {
      return update(state, { nowPlaying: { [action.index]: { liked: { $set: action.payload }}}})
    }

    case 'UPDATE_POPULAR': {
      return update(state, { popular: { [action.index]: { liked: { $set: action.payload }}}})
    }

    case 'UPDATE_UPCOMING': {
      return update(state, { upcoming: { [action.index]: { liked: { $set: action.payload }}}})
    }

    case 'UPDATE_TOP_RATED': {
      return update(state, { topRated: { [action.index]: { liked: { $set: action.payload }}}})
    }

    case 'SET_NOW_PLAYING': {
      return {...state, nowPlaying: action.payload}
    }

    case 'SET_POPULAR': {
      return {...state, popular: action.payload}
    }

    case 'SET_TOP_RATED': {
      return {...state, topRated: action.payload}
    }

    case 'SET_UPCOMING': {
      return {...state, upcoming: action.payload}
    }

    case 'SET_USER_AUTHENTICATION': {
      return {...state, user: action.payload}
    }

    default: {
      return state
    }
  }
}
