import React, {Component, Fragment} from 'react';
import { Route, withRouter } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-day-picker/lib/style.css';
import Footer from './Footer'


import Entry from './Entry'

class Entries extends Component{
    state={
        userEntries:[],
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

    // When a day on the calendar is clicked, onChange gets the clicked date and gets entries made on that day
    onChange =(date)=> {
        let dateString = String(date)
        this.setState({dateString})
        this.getEntry(dateString)
    }
    
    // Gets entries made on chosen day
    getEntry=(date)=>{
        console.log('entry',date);
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
            });
    } 
    
    
    
    render(){
        let entriesArray = ["You have no entries for this day."]
        if (this.state.userEntries.length !== 0){
        entriesArray = this.state.userEntries.map(
            entry=>(
                <Entry
                key={entry.id}
                entry={entry}
                />
            )
        )}else if(this.state.userEntries.length === 0){
            entriesArray = "You have no entries for this day."}

        

    return(
    <Fragment>
        <br/>
        <h2 className="choose-date style-font">Choose a date</h2>

        <Calendar 
        calendarType="US" 
        className="calendar2" 
        style="color:black !important"
        tileClassName="calendar2"
        onChange={this.onChange}
        value={this.state.date}       
        /> 
        <br/>
        <div className="elevenpt">
         {entriesArray}
        </div>
        <br/><br/>
    </Fragment>
    )}
}

export default withRouter(Entries)
