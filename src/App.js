import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signUp';
import Navbar from './components/navbar';
import AllPosts from './components/allPosts';
import AllComments from './components/allComments';
import Likes from './components/likes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authToken: null,
      username: null
    }
    this.updateAuthState = this.updateAuthState.bind(this)
  }

  updateAuthState(token, username) {
    console.log(token, username)
    this.setState({
      authToken: token,
      username: username,
    })
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <Navbar updateAuthState={this.updateAuthState}
            authToken={this.state.authToken}/>
        </header>

        <Route exact={true} path="/posts"
          render={
            (props) => <AllPosts authToken={this.state.authToken}/> }
               />

        <Route exact={true} path="/log_in"
          render={ (props)=> <Login updateAuthState={this.updateAuthState}
               authToken={this.state.authToken} /> }
               />

         <Route exact={true} path="/"
           render={ (props)=> <SignUp updateAuthState={this.updateAuthState}
                authToken={this.state.authToken}/> }
                />



      </div>
    );
  }
}

export default App;
