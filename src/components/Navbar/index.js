import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src="/img/film-solid1.svg"/>
      </Link>
      <ul>
        <li>
          <Link className="link" to="/now_playing">Now Playing</Link>
        </li>
        <li>
          <Link className="link" to="/popular">Popular</Link>
        </li>
        <li>
          <Link className="link" to="/top_related">Top Rated</Link>
        </li>
        <li>
          <Link className="link" to="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link className="link" to="/my_profile">My profile</Link>
        </li>
        <li>
          <Link className="link" to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  )
}
