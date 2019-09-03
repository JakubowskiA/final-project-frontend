import React, {Component, Fragment} from 'react';
import { Route, withRouter } from 'react-router-dom';
import Calendar from 'react-calendar';
// import Calendar from 'react-calendar/dist/entry.nostyle';
// import ModernDatepicker from 'react-modern-datepicker';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


import Entry from './Entry'

class Entries extends Component{
    state={
        userEntries:[],
        // date:"",
        date: new Date(),
        dateString:"",
        prompt1:"Choose a date.",
        prompt2:""
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
        // console.log(date);
        let dateString = String(date)
        this.setState({dateString})
        // console.log('Date String', dateString);
        // this.setState({ dateString:dateString })
        // console.log('date state str',this.state.dateString);
        
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
              if (this.state.userEntries.length === 0){
                this.setState({prompt2: "You have no entries for this day."}) 
            }else{
                this.setState({prompt2: ""})
            }
              console.log('entries',data);
              
            //   this.props.history.push('/welcome');
            });
    } 
    
    
    
    render(){
        console.log('state entries',this.state);
        let entriesArray = ["You have no entries for this day."]
        if (this.state.userEntries !== []){
        entriesArray = this.state.userEntries.map(
            entry=>(
                <Entry
                key={entry.id}
                entry={entry}
                />
            )
        )}else{entriesArray = ["You have no entries for this day."]}

        

    return(
    <Fragment>

        <h1>{this.state.prompt1}</h1>
       
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
       
        <h3>{this.state.prompt2}</h3>
         {entriesArray}
        <br/>
       
    </Fragment>
    )}
}

export default withRouter(Entries)

