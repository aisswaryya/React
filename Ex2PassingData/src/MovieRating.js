import React, { Component } from 'react';
import LikedUsers from './LikedUsers';

class MovieRating extends Component{
  render(){
    const { profiles, users, movies } = this.props;
    const movieArray = Object.values(movies);
    return (
      <div className = "Movie-container">
        {movieArray.map(movie => (
         <div key ={movie.id} className ="Movie-name"> 
<h3>{movie.name}</h3>
        <LikedUsers  movieID={movie.id} users={users} profiles={profiles}  />
</div>
))}
</div>
      );
}}
  


export default MovieRating;