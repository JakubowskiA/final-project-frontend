import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';


class EntryForm extends Component{
    state={
        preLevel:null,
        stressors:"",
        evaluation:"",
        action: "", 
        positivity: "",
        postLevel:null,
        submitted:false

    }

    // Controls form inputs
    handleChange = event => {
        const inputType = event.target.name
        this.setState({
            [inputType]: event.target.value
        })
    }

    // Sends information to backend to add new entry to database
    submitEntry=(event, entry)=>{
        event.preventDefault()
        this.setState({submitted: true})
        console.log('entry',entry)
        fetch('http://localhost:3000/entries',{
          method: 'POST',
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },body:JSON.stringify({
            entry: {
                pre_level: this.state.preLevel,
                stressors: this.state.stressors,
                evaluation: this.state.evaluation,
                action:  this.state.action, 
                positivity:  this.state.positivity,
                post_level: this.state.postLevel,
                user_id: this.props.userId
            }
          })
        })
        .then(res=>res.json())
        .then(data => {
            console.log('Response Data', data);
            this.setState({ user: data.user });
            this.props.history.push('/welcome');
        })
      }


    render(){
        
    return(
        <div>
        <form onSubmit={(event)=>this.submitEntry(event, this.state)} className="entry-form">
        <br/>
            <label>What is your stress level? </label>
            <br/>
            <input type="range" min="1" max="10" step="1" onChange={this.handleChange} name="preLevel"/>
            <br/>
            <label>Initial Stress Level: {this.state.preLevel}</label>
            <div>
                <div>
                    <label htmlFor="stressors">What is making you feel stressed?</label>
                    <br/>
                    <textarea id="stressors" name="stressors" 
                    onChange={this.handleChange}
                    className="input-textarea"
                    placeholder={"Write what is making you feel stressed. The more specific you are, the better you can plan how to handle what is causing your stress."}
                    />
                </div>
                <br/>
                <div>
                    <label>What can you do to reduce your stress?</label>
                    <br/>
                    <textarea name="evaluation" 
                    onChange={this.handleChange}
                    className="input-textarea"
                    placeholder={"Think about what you can do to minimize or even remove the stressors in your life. These should be specific actions you can take."}
                    />
                </div>
            </div>
            <br/>
            <p className="elevenpt">Take a break for some self care. Do something just for you!</p>
            <p className="elevenpt">If you do not have time now, schedule something for later.</p>
            <div>
                <label>What did you do for your self care?</label>
                <br/>
                <textarea name="action" 
                onChange={this.handleChange}
                className="input-textarea"
                placeholder={"Put your device down and do something just for you. This is self care. When you are done, write what you did. This is a good way to keep track of your self care and hold yourself accountable for practicing self care."}
                />
            </div>
            <br/>
            <div>
                <label>Write something that makes you happy!</label>
                <br/>
                <textarea name="positivity" 
                onChange={this.handleChange}
                className="input-textarea"
                placeholder={"Write something that makes you happy. This can be a good memory, something you are looking forward to, or something good that happened today."}
                /> 
            </div> 
            <br/>
            <label>What is your stress level now?</label>
            <br/>
            <input type="range" min="1" max="10" step="1" onChange={this.handleChange} name="postLevel"/>
            <br/>
            <label>Final Stress Level: {this.state.postLevel}</label>
            <br/>
            <br/>
            <input type="Submit" className="normal-button" disabled={this.state.submitted === true}/>
            <br/><br/>
        </form>
        <br/><br/>
        </div>
    )}
}

export default withRouter(EntryForm)

