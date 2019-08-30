import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Entry from './Entry'

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
        <h3>{moment(this.props.entry.created_at).format('LLL')}</h3>
        <h3>Initial Stress Level: {this.props.entry.pre_level}</h3>
        <br/>
        <h3>What is making you feel stressed?</h3>
        <h4>{this.props.entry.stressors}</h4>
        <br/>
        <h3>What can you do to reduce your stress?</h3>
        <h4>{this.props.entry.evaluation}</h4>
        <br/>
        <h3>What did you do for your self care?</h3>
        <h4>{this.props.entry.action}</h4>
        <br/>
        <h3>Write something that makes you happy!</h3>
        <h4>{this.props.entry.positivity}</h4>
        <br/>
        <h3>Final Stress Level: {this.props.entry.post_level}</h3>
        </div>
    </Fragment> 
    )}
}

export default withRouter(Entries)

