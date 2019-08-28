import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import Entry from './Entry'

class Entries extends Component{
    state={
        entry:{}
    }
    
    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.userId}/entries`)
        .then(res=>res.json())
        .then(data=>this.setState({entry:data}))
    }
    
    render(){
        console.log('entry',this.state.entry)
    return(
    <Fragment>
        <h3>INSDATE</h3>
        <h3>Initial Stress Level</h3>
        <br/>
        <h3></h3>
        <br/>
        <h3></h3>
        <br/>
        <h3></h3>
        <br/>
        <h3></h3>
        <br/>
        <h3>Final Stress Level</h3>
    </Fragment>
    )}
}

export default withRouter(Entries)

