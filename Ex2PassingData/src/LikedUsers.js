import React, { Component} from 'react';


class LikedUsers extends Component{
  render(){
    const { profiles, users, movieID } = this.props;
    const filteredUsers = profiles.filter(
      profile => Number(profile.favoriteMovieID) === movieID);
      
      if(!filteredUsers || filteredUsers.length ===0){
      return <p>None of the current users liked this movie </p>;
      }
    
      return(
        <div>
        <p> Liked By</p>
        <ul>
        {filteredUsers.map(profile => (
          <li key={profile.userID}>
{users[profile.userID].name} </li>
        ))}
      </ul>         
        </div>
      
    );
  }
}

export default LikedUsers;