import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import Calendar from 'react-calendar';
// import Calendar from 'react-calendar/dist/entry.nostyle';
import ModernDatepicker from 'react-modern-datepicker';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


import Entry from './Entry'

class Entries extends Component{
    state={
        userEntries:[],
        // date:"",
        date: new Date(),
        dateString:""
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/users/${this.props.userId}/entries`)
    //     .then(res=>res.json())
    //     .then(data=>this.setState({userEntries:data}))
    // }

    // selectDay=(event)=>{
    //     console.log(event)
    //     // this.setState({date:event})
    //     // console.log(this.state.date)
    //     // console.log(event.slice(4,6))
    //     // let chosenYear=event.slice
    //     // let chosenMonth=null
    //     // //  SWITCH STATEMENT FOR MONTHS
    //     // let chosenDay=event.slice
    //     // let chosenDate=`${chosenYear}-${}-${chosenDay}`
    //     console.log('wut',this.props);
    // }

    onChange =(date)=> {
        console.log(date);
        let dateString = String(date)
        console.log('Date String', dateString);
        // this.setState({ dateString:dateString })
        // console.log('date state str',this.state.dateString);
        
        // let chosenYear=chosenDate.slice(11,15)
        // let chosenMonth=null
        // //  SWITCH STATEMENT FOR MONTHS
        // let chosenDay=chosenDate.slice(8,10)
        // console.log(chosenDay, chosenYear)
        this.getEntry(dateString)
    }
    
    getEntry=(date)=>{
        console.log('entry',date);
        // http://localhost:3000/entries/${this.props.userId}/entry/?=entry-date=${date}
        fetch(`http://localhost:3000/entries/${this.props.userId}/entry/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accepts: 'application/json',
              'Entry-Date': date,
              'User-Id':this.props.userId
            }
          })
            .then(resp => resp.json())
            .then(data => {
              this.setState({ userEntries: data });
              console.log('entries',data);
              
            //   this.props.history.push('/welcome');
            });
    } 
    
    
    
    render(){
        console.log('user',this.props);
        
        // console.log('entry props',this.state.userEntries)
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
       
        {/* CALENDAR1
        <div onClick={this.selectDay}>
        <DayPicker 
        className="calendar"
        style="color:black !important"
        onDayCreate={this.selectDay} 
        
        /> 
        </div>
        */}
        {/* CALENDAR 2 */}
        <Calendar 
        calendarType="US" 
        className="calendar2" 
        style="color:black !important"
        tileClassName="calendar2"
        onChange={this.onChange}
        value={this.state.date}
        /> 
         {/* {entriesArray} */}
        <br/>
       
    </Fragment>
    )}
}

export default withRouter(Entries)

