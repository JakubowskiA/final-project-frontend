import React, {Component, Fragment} from 'react';
import { Route, withRouter } from 'react-router-dom';
// const CSVtoJSON = require("csvtojson")
// const FileSystem =require("fs")
// CSVtoJSON.fromFile("./source.csv").then(source=>{
//   console.log('source',source);
//   const json = CSVtoJSON(source, {fields: ["name", "tags"]})
//   FileSystem.writeFileSync("./")
// })
// import {connect} from 'react-redux';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Main from './components/Main';
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    user: {},
    showModal:false,
    backgroud: "App"
  }

  login=(user)=>{
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
        localStorage.setItem('project-user-token', data.token);
        this.setState({ user: data.user });
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

  componentDidMount() {
    let token = localStorage.getItem('project-user-token');
    if (token) {
      fetch(`http://localhost:3000/retrieve_user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json',
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(user => {
          this.setState({ user: user });
          this.props.history.push('/welcome');
        });
    } else {
      this.props.history.push('/')
    }
  }

  showModal = e => {
    this.setState({
      show: true
    });
  };

  customizeBackground=(event)=>{
    this.setState({backgroud:event.target.id})
  }

  render(){
    
    return (
    <div className={this.state.backgroud} >
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
              <Welcome userId={this.state.user.id}/>
            </Fragment>
          )}
        />
        <Route
          path='/main'
          render={() => (
              <Fragment>
              <Main 
              userId={this.state.user.id} 
              user={this.state.user}
              showModal={this.showModal}
              customizeBackground={this.customizeBackground}
              />
              {/* <Modal show={this.state.show} /> */}
              </Fragment>
          )}
        />
      </div>
  ) }
}

// export default connect(msp, mdp)(withRouter(App));

export default withRouter(App);
