import React from 'react'
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {

  logout = () => {
    window.localStorage.removeItem('read-me-user-token')
    this.props.history.push("/")
  }

  render(){
    return(
   <nav>
       <span onClick={_ => this.props.history.push("/")}>Make New Entry</span>
       <span onClick={_ => this.props.history.push("/")}>See Old Entries</span>
       <span onClick={_ => this.props.history.push("/")}>Stress Tracker</span>
       <span onClick={_ => this.props.history.push("/")} onClick={this.logout}>Logout</span>
   </nav>
    )}
}

export default NavBar