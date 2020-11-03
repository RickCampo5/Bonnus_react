import './App.css';
import { moviesReducer } from './reducers/moviesReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NavBar } from './components/Navbar/index';
import { PrivateRoute } from './components/PrivateRoute';

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Popular } from './pages/Popular';
import { TopRated } from './pages/TopRated';
import { Upcoming } from './pages/Upcoming';
import { MovieDetail } from './pages/MovieDetail';
import { UserProfile } from './pages/UserProfile';

const initialState = {
  user: {},
  nowPlaying: [],
  favoriteMovies: [],
  popular: [],
  upcoming: [],
  topRated: [],
  movie: {},
  video: {}
}

const store = createStore(moviesReducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
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
