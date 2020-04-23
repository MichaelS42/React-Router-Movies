import React from 'react';
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// const history = useHistory();
// const routeToHome = event => {
//   history.push("/")
// }

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
