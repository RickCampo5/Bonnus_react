import './App.css';
import { moviesReducer } from './reducers/moviesReducer'
import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { NavBar } from './components/Navbar/index';
import { PrivateRoute } from './components/PrivateRoute';

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NowPlaying } from './pages/NowPlaying';
import { Popular } from './pages/Popular';
import { TopRated } from './pages/TopRated';
import { Upcoming } from './pages/Upcoming';
import { MovieDetail } from './pages/MovieDetail';
import { UserProfile } from './pages/UserProfile';

const initialState = {
  user: false,
  movies: [],
  favoriteMovies: []
}

const store = createStore(moviesReducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/now_playing" component={NowPlaying} />
          <PrivateRoute exact path="/popular" component={Popular} />
          <PrivateRoute exact path="/top_rated" component={TopRated} />
          <PrivateRoute exact path="/upcoming" component={Upcoming} />
          <PrivateRoute exact path="/movie_detail/:id" component={MovieDetail} />
          <PrivateRoute exact path="/user_profile" component={UserProfile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
