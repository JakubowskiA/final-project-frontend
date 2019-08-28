import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import Entry from './Entry'

class Entries extends Component{
    state={
        entriesArray:[]
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.userId}/entries`)
        .then(res=>res.json())
        .then(data=>this.setState({entriesArray:data}))
    }
    // UPDATE NOTES
    // entriesArray successfully gets entries data, now I need to figure out how to display it all
    // Display in calendar??
    // Have users enter a date to get entry?

    // console.log('entries',this.props)
    
    render(){
    return(
    <Fragment>
        <h1>TEST</h1>
       
    </Fragment>
    )}
}

export default withRouter(Entries)

