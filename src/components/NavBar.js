import React from 'react'
import { withRouter } from 'react-router-dom';
import BackgroundSelectButton from './BackgroundSelectButton'

class NavBar extends React.Component {
  state={
    show:false
  }

  logout = () => {
    window.localStorage.removeItem('project-user-token')
    this.props.history.push("/")
  }

  handleClose = () => this.setState({show: false});

  handleShow = () => this.setState({show: true});
  
  render(){

    return(
    <nav className="nav-bar">
        <span className="nav-name hvr-grow">Serene</span>
        <span className="nav-item hvr-grow" onClick={_ => this.props.history.push('/main/new-entry')}>New Entry</span>
        <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/entries")}>Old Entries</span>
        <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/stress-level-tracker")}>Stress Tracker</span>
        <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/stress-levels")}>Stress Scale</span>
        <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/self-care")} >Self Care Ideas</span>
        <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/main/schedule")} >Schedule</span>
        <span className="nav-item hvr-grow" onClick={_ => this.props.history.push("/")} onClick={this.logout}>Logout</span>
        <BackgroundSelectButton variant="primary" customizeBackground={this.props.customizeBackground}>
         test button
        </BackgroundSelectButton>

    </nav>
    )}
}

export default withRouter(NavBar)