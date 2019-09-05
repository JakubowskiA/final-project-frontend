import React from 'react'
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {

  logout = () => {
    window.localStorage.removeItem('read-me-user-token')
    this.props.history.push("/")
  }

  render(){
    return(
   <nav className="nav-bar">
       <span className="nav-item hvr-grow" onClick={_ => this.props.history.push('/main/new-entry')}>New Entry</span>
       <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/entries")}>Old Entries</span>
       <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/stress-level-tracker")}>Stress Tracker</span>
       <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/stress-levels")}>Stress Scale</span>
       <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/self-care")} >Self Care Ideas</span>
       <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/")} onClick={this.logout}>Logout</span>
   </nav>
    )}
}

export default withRouter(NavBar)