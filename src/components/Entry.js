import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class Entries extends Component{
    state={
        entry:{}
    }
    
    // componentDidMount(){
    //     fetch(`http://localhost:3000/users/${this.props.userId}/entries`)
    //     .then(res=>res.json())
    //     .then(data=>this.setState({entry:data}))
    // }
    
    render(){
        // this.setState({entry:this.props.entry})
        console.log('entry',this.props.entry)
    return(
        <Fragment>
        <div className="show-entry">
        <p className="show-entry-question">{moment(this.props.entry.created_at).format('LLL')}</p>
        <p className="show-entry-question">Initial Stress Level: {this.props.entry.pre_level}</p>
        <p className="show-entry-question">What is making you feel stressed?</p>
        <p className="show-entry-input">{this.props.entry.stressors}</p>
        <p className="show-entry-question">What can you do to reduce your stress?</p>
        <p className="show-entry-input">{this.props.entry.evaluation}</p>
        <p className="show-entry-question">What did you do for your self care?</p>
        <p className="show-entry-input">{this.props.entry.action}</p>
        <p className="show-entry-question">Write something that makes you happy!</p>
        <p className="show-entry-input">{this.props.entry.positivity}</p>
        <p className="show-entry-question">Final Stress Level: {this.props.entry.post_level}</p>
        </div>
    </Fragment> 
    )}
}

export default withRouter(Entries)

