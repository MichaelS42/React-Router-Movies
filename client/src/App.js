import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movie, setMovies] = useState([]);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/movies/:itemID">
          <Movie items={movie} />
        </Route>
        <Route exact path="/" component={MovieList}/>
      </Switch>
    </div>
  );
};

export default App;
