import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';

class Welcome extends Component{
    render(){
        
    return(
    <Fragment>
        <button className="welcome-btn hvr-grow" onClick={_ => this.props.history.push('/main/new-entry')}>Make New Entry</button>
        <button className="welcome-btn hvr-grow" onClick={_ => this.props.history.push('/main/entries')}>See Old Entries</button>
        <button className="welcome-btn hvr-grow" onClick={_ => this.props.history.push('/main/stress-level-tracker')}>Stress Tracker</button>
        <button className="welcome-btn hvr-grow" onClick={_ => this.props.history.push('/main/stress-levels')}>Stress Scale</button>
        <button className="welcome-btn hvr-grow" onClick={_ => this.props.history.push('/main/self-care')}>Self Care Ideas</button>
        <button className="welcome-btn hvr-grow" onClick={_ => this.props.history.push('/main/schedule')}>Self Care Schedule</button>
    </Fragment>
    )}
}

export default withRouter(Welcome)