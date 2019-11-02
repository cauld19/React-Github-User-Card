import React from 'react';
import './App.css';

import MyUserCard from "./components/myUserCard"
import FollowerUserCardList from "./components/FollowerUserCardList"
import SearchForm from "./components/SearchForm"

class App extends React.Component {

  state = {
    data: [],
    followerData: [],
    searchName: ""
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

  handleChange = e => {
    this.setState({
      searchName: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const filteredSearch = this.state.followerData.filter(user => user.login.toLowerCase().includes(this.state.searchName.toLowerCase()))
    if(filteredSearch.length === 0) {
      alert("none")
      e.target.reset();
    } else {
      this.setState({
        followerData: [...filteredSearch],
      })
      e.target.reset(); 
    }
  }



  render() {
    return (
      <div>
        <div>
          <MyUserCard 
            data={this.state.data}
          />
          <SearchForm 
            searchName={this.state.searchName}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <FollowerUserCardList  followerData={this.state.followerData} />
        </div>
      </div>
      

    );
  }
}

export default App;
