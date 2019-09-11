import React from 'react'
import { withRouter } from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
        <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose} >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="rainbow-btn" onClick={this.props.customizeBackground}><br/></div>
          <br/>
        </Modal.Body>
      </Modal>
        {/* <button onClick={() => { this.props.showModal() }}>A</button> */}
    </nav>
    )}
}

export default withRouter(NavBar)