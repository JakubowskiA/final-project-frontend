import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
// import Calendar from 'react-calendar';
// import Calendar from 'react-calendar/dist/entry.nostyle';
import ModernDatepicker from 'react-modern-datepicker';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


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

    selectDay=(event)=>{
        console.log(event);
        
    }
    
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
        {/* <ModernDatepicker/> */}
        <DayPicker 
        className="calendar"
        style="color:black !important"
        />
        {/* <Calendar 
        calendarType="US" 
        className="calendar" 
        onClickDay={this.selectDay} 
        
        tileClassName="tile"/> */}
        {/* {entriesArray} */}
        <br/>
       
    </Fragment>
    )}
}

export default withRouter(Entries)

