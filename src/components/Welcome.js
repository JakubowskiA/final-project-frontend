import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';

class Welcome extends Component{
    render(){
        // console.log('props', this.props.userId);
        fetch('')
    return(
    <Fragment>
        <button className="welcome-btn" onClick={_ => this.props.history.push('/main/new-entry')}>Make New Entry</button>
        <button className="welcome-btn" onClick={_ => this.props.history.push('/main/entries')}>See Old Entries</button>
        <button className="welcome-btn" onClick={_ => this.props.history.push('/main/stress-level-tracker')}>Stress Tracker</button>
        {/* <button className="welcome-btn" onClick={_ => this.props.history.push('/')}>Make New Entry</button> */}
    </Fragment>
    )}
}

export default withRouter(Welcome)