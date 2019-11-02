import React from 'react';
import './App.css';

import MyUserCard from "./components/myUserCard"
import FollowerUserCardList from "./components/FollowerUserCardList"

class App extends React.Component {

  state = {
    data: [],
    followerData: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/cauld19")
      .then(res => res.json())
      .then(res => {
        console.log(
          "ca: App.js: App: componentDidMount: fetch: then: res: ",
          res
        );
        this.setState({
          data: res
        });
      })
      .catch(err => {
        console.log(
          "bk: index.js: App: componentDidMount: fetch: catch: err: ",
          err
        );
      });

      fetch("https://api.github.com/users/cauld19/followers")
        .then(res => res.json())
        .then(res => {
          console.log(
            "ca: App.js: App: componentDidMount: fetch: then: follower res: ",
            res[0]
          );
          this.setState({
            followerData: res
          });
        })
        .catch(err => {
          console.log(
            "bk: index.js: App: componentDidMount: fetch: catch: err: ",
            err
          );
        });
  }



  render() {
    return (
      <div>
        <div>
          <MyUserCard 
            data={this.state.data}
          />
          <FollowerUserCardList  followerData={this.state.followerData} />
        </div>
      </div>
      

    );
  }
}

export default App;
