import React, { Component } from 'react';
import ListContacts from './ListContacts'




class App extends Component {
  state = {
    contacts: [
      {
        "id": "ashka",
        "name": "Ash KA",
        "handle": "@ash_boy",
        "avatarURL": "http://localhost:5001/ashwanth.jpg"
        
      },
      {
        "id": "ambika",
        "name": "Ambika K",
        "handle": "@imAmss",
        "avatarURL": "http://localhost:5001/ambika.jpg"
      },
      {
        "id": "divya",
        "name": "Divya Joy",
        "handle": "@RJDivya",
        "avatarURL": "http://localhost:5001/divya.jpg"
      },
    
      {
        "id": "juhi",
        "name": "Juhi Sultana",
        "handle": "@imJu",
        "avatarURL": "http://localhost:5001/juhi.jpg"
      },
    
      {
        "id": "shribhu",
        "name": "Shribhu Arun",
        "handle": "@tennesseyHoney",
        "avatarURL": "http://localhost:5001/shribhu.jpg"
      },
    
      {
        "id": "bala",
        "name": "BalaMurugan",
        "handle": "@avichi",
        "avatarURL": "http://localhost:5001/bala.jpg"
      },
    
      {
        "id": "azadh",
        "name": "Abdul Azadh",
        "handle": "@Azu",
        "avatarURL": "http://localhost:5001/azadh.jpg"
      },
    
      {
        "id": "aphurvika",
        "name": "AP",
        "handle": "@apRaj",
        "avatarURL": "http://localhost:5001/aphurvika.jpg"
      }
     ];
  }
  render() {
    return (
      <div>
        <ListContacts contacts ={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
