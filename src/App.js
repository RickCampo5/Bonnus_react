import './App.css';
import reducer from './reducers/moviesReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Login } from './pages/Login'
import { NavBar } from './components/Navbar/index';

const initialState = {
  movies: [],
  favoriteMovies: []
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
