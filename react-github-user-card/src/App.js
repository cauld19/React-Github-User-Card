import React from 'react';
import './App.css';

import MyUserCard from "./components/myUserCard"
import FollowerUserCardList from "./components/FollowerUserCardList"
import SearchForm from "./components/SearchForm"

class App extends React.Component {

  state = {
    data: [],
    permFollowerData: [],
    followerData: [],
    searchName: "",
    usersearchName: ""
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
            followerData: res,
            permFollowerData: res
          });
        })
        .catch(err => {
          console.log(
            "bk: index.js: App: componentDidMount: fetch: catch: err: ",
            err
          );
        });
  }

  handleFetchUser = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.usersearchName}`)
      .then(res => res.json())
      .then(res => {
        console.log(
          "bk: index.js: App: componentDidMount: fetch: then: res: ",
          res
        );
        this.setState({
          data: res,
          usersearchName: ""
        });
      })
      .catch(err => {
        console.log(
          "bk: index.js: App: componentDidMount: fetch: catch: err: ",
          err
        );
      });
  };

  handleChange = e => {
    this.setState({
      searchName: e.target.value
    })
  }

  handlUserChange = e => {
    this.setState({
      usersearchName: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const filteredSearch = this.state.followerData.filter(user => user.login.toLowerCase().includes(this.state.searchName.toLowerCase()))
    if(filteredSearch.length === 0) {
      alert("none")
      this.setState({
        searchName: ""
      });
    } else {
      this.setState({
        followerData: [...filteredSearch],
        searchName: ""
      })
    }
  }


  resetFollowers = () => {
    this.setState({
      followerData: this.state.permFollowerData
    })
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
            usersearchName={this.state.usersearchName}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleFetchUser={this.handleFetchUser}
            resetFollowers={this.resetFollowers}
            handlUserChange={this.handlUserChange}
          />
          <FollowerUserCardList  followerData={this.state.followerData} />
        </div>
      </div>
      

    );
  }
}

export default App;
