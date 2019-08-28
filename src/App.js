import React, {Component, Fragment} from 'react';
import { Route, withRouter } from 'react-router-dom';
// import {connect} from 'react-redux';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome'
import Main from './components/Main'

class App extends Component {
  state = {
    user: {}
  }

  login=(user)=>{
    // console.log('user',user);
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({
      email: user.email,
      password: user.password
    })
    })
    .then(res=>res.json())
    .then(data=>{
      if (Object.keys(data).length > 0) {
        // console.log('Login response Data', data);
        localStorage.setItem('project-user-token', data.token);
        this.setState({ user: data.user });
        // console.log('user', user)
        this.props.history.push(`/welcome`);
      } else {
        alert("Invalid username or password")
      }
    }
    )
  }

  createUser=(user)=>{
    fetch('http://localhost:3000/signup',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },body:JSON.stringify({
        user: {
          name: user.name,
          email: user.email,
          password: user.password
        }
      })
    })
    .then(res=>res.json())
    .then(data => {
      if (data.status === 422) {
        alert('Email already taken!')
      }
      else {
        console.log('Response Data', data);
        localStorage.setItem('project-user-token', data.token);
        this.setState({ user: data.user });
        this.props.history.push('/welcome');
      }
    })
  }

  render(){
    // console.log('state',this.state);
    
    return (
    <div className="App" >
        <Route
          exact path="/"
          render={() => (
            <Login login={this.login} />
          )}
        />
        <Route
          path="/signup"
          render={() => (
            <Signup createUser={this.createUser} />
          )}
        />
        <Route
          path="/welcome"
          render={() => (
            <Fragment>
              <Header />
              {/* <NavBar /> */}
              <Welcome userId={this.state.user.id} />
            </Fragment>
          )}
        />
        <Route
          path='/main'
          render={() => (
              <Main userId={this.state.user.id}/>
          )}
        />
      </div>
  ) }
}

// export default connect(msp, mdp)(withRouter(App));

export default withRouter(App);
