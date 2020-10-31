import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

export const NavBar = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => {
    return state.user
  })

  const logout = () => {
    dispatch({
      type: 'SET_USER_AUTHENTICATION',
      payload: false
    })
  }

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src="/img/film-solid1.svg" alt="logo"/>
      </Link>
      <ul>
        <li>
          <Link className="link" to="/popular">Popular</Link>
        </li>
        <li>
          <Link className="link" to="/top_rated">Top Rated</Link>
        </li>
        <li>
          <Link className="link" to="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link className="link" to="/user_profile">My profile</Link>
        </li>
        <li>
          {
            isAuth ? <button className="link" onClick={logout}>Logout</button> : <Link className="link" to="/login" >Login</Link>
          }
        </li>
      </ul>
    </nav>
  )
}
