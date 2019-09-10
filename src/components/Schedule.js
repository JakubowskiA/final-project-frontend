import React, {Component, Fragment} from 'react';
import { Route, withRouter } from 'react-router-dom';
import Calendar from 'react-calendar';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';


class Schedule extends Component{
    state={
        inputName:"",
        inputDate:"",
        appointments:[]
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/users/${this.props.userId}/appointments`)
    //     .then(res=>res.json())
    //     .then(data=>this.setState({appointments:data}))
    // }


    onChange=(date)=> {
        console.log(date);
        let dateString = String(date)
        this.setState({inputDate:dateString}, ()=>this.getAppointment(dateString))             
    }

    getAppointment=(date)=>{
        console.log('date',date);
        fetch(`http://localhost:3000/users/${this.props.userId}/appointment`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accepts: 'application/json',
              'Appointment-Date': date,
              'User-Id':this.props.userId
            }
          })
          .then(res=>res.json())
          .then(data=>this.setState({appointments:data}))       
    } 

    newAppointment=(event)=>{
        event.preventDefault()
        console.log('state',this.state);
        fetch('http://localhost:3000/appointments',{
          method: 'POST',
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            'User-Id':this.props.userId
          },body:JSON.stringify({
            appointment: {
                name: this.state.inputName,
                date: this.state.inputDate,
                user_id: this.props.userId
            }
          })
        })
        .then(res=>res.json())
        .then(()=>this.getAppointment(this.state.inputDate))
    }
    
    
    
    handleChange = event => {
        const inputType = event.target.name
        this.setState({
            [inputType]: event.target.value
        })
    }

    deleteAppointment=(appointmentId)=>{
        console.log(appointmentId);
        
        fetch(`http://localhost:3000/appointments/${this.props.userId}/${appointmentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                'Appointment-Id':appointmentId
            },
        })
        .then(res => res.json()) 
        .then(()=>this.getAppointment(this.state.inputDate))
    }
    
    render(){
        let appointmentsArray = []
        if (this.state.appointments.length !== 0){
        appointmentsArray = this.state.appointments.map(
            appointment=>(
                <div className="appointment-block">
                <p>{appointment.name} </p>
                <div className="appointment">
                <p>{moment(appointment.date).format('lll')}</p>
                <button onClick={()=>this.deleteAppointment(appointment.id)}>Delete</button>
                </div>
                </div>
            )
        )}else if(this.state.appointments.length === 0 && this.state.inputDate === ""){
            appointmentsArray = ["Choose a day to see your schedule."]
        }else{appointmentsArray = ["You have nothing scheduled for this day."]}
        

    return(
    <Fragment>

        {/* <h2 className="choose-date">Choose a date</h2> */}
        <br/><br/>
        <Calendar 
        calendarType="US" 
        className="calendar2" 
        style="color:black !important"
        tileClassName="calendar2"
        onChange={this.onChange}
        value={this.state.date}       
        /> 
        <div className="schedule-container">
        <div className="schedule-form">
            <p className="schedule-header">Add something to your schedule</p>
            <form onSubmit={(event)=>this.newAppointment(event, this.state)} >
                <label>What will you do?</label>
                <br/>
                <input type="text" name="inputName" onChange={this.handleChange} value={this.state.name}></input>
                <br/><br/>
                <label>When will you do it?</label>
                <br/>
                <input type="datetime-local" name="inputDate" onChange={this.handleChange} value={this.state.date}></input>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        <div className="schedule-form">
        <p className="schedule-header">Your schedule for this day</p>
       {appointmentsArray}
        </div>
        </div>
        <br/><br/>
    </Fragment>
    )}
}


export default Schedule