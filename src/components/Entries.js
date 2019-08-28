import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import Entry from './Entry'

class Entries extends Component{
    state={
        userEntries:[]
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.userId}/entries`)
        .then(res=>res.json())
        .then(data=>this.setState({userEntries:data}))
    }
    // UPDATE NOTES
    // entriesArray successfully gets entries data, now I need to figure out how to display it all
    // Display in calendar??
    // Have users enter a date to get entry?

    // console.log('entries',this.props)
    
    render(){
        console.log('entry props',this.state.userEntries)
        // const entriesArray = this.state.userEntries.map(
        //     entry=>(
        //         <Entry
        //         key={entry.id}
        //         entry={entry}
        //         />
        //     )
        // )
    return(
    <Fragment>
        <h1>TEST</h1>
        {/* {entriesArray} */}
        
       
    </Fragment>
    )}
}

export default withRouter(Entries)

