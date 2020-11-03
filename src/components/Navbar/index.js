import React from 'react';
import './style.css'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

export const NavBar = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => {
    return state.user
  })

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({
      type: 'SET_USER_AUTHENTICATION',
      payload: {}
    })
  }

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src="/img/film-solid1.svg" alt="logo"/>
      </Link>
      <ul>
        <li>
          <NavLink activeClassName="active" className="link" to="/popular">Popular</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="link" to="/top_rated">Top Rated</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="link" to="/upcoming">Upcoming</NavLink>
        </li>
        <li>
          <NavLink  activeClassName="active" className="link" to="/user_profile">My profile</NavLink>
        </li>
        <li>
          {
            isAuth.id ? <button className="link" onClick={logout}>Logout</button> : <NavLink className="link" to="/login" >Login</NavLink>
          }
        </li>
      </ul>
    </nav>
  )
}
