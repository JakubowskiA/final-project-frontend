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
        <h4>{moment(this.props.entry.created_at).format('LLL')}</h4>
        <h4>Initial Stress Level: {this.props.entry.pre_level}</h4>
        <h4>What is making you feel stressed?</h4>
        <p className="show-entry-input">{this.props.entry.stressors}</p>
        <h4>What can you do to reduce your stress?</h4>
        <p className="show-entry-input">{this.props.entry.evaluation}</p>
        <h4>What did you do for your self care?</h4>
        <p className="show-entry-input">{this.props.entry.action}</p>
        <h4>Write something that makes you happy!</h4>
        <p className="show-entry-input">{this.props.entry.positivity}</p>
        <h4>Final Stress Level: {this.props.entry.post_level}</h4>
        </div>
    </Fragment> 
    )}
}

export default withRouter(Entries)

