import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  
  state = {friends: friends};

  removeFriend = id => {
    const filteredFriends = this.state.friends.filter(friend => !(id === friend.id))

    this.setState({friends: filteredFriends})
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Bestie List</h1>
        {this.state.friends.map(friend => (
        <FriendCard
          key={friend.id}
          id={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
          delete={this.removeFriend}
        />
      ))}
      </Wrapper>
    );
  }

}

export default App;
