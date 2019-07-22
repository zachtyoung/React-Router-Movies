import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from '../src/Movies/MovieList'
import Movie from '../src/Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
    <div>
      <SavedList list={savedList} />
    <Switch>
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' component={Movie} />
    </Switch>
    </div>
    </Router>
  );
};

export default App;
