import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';


class EntryForm extends Component{
    state={
        preLevel:null,
        stressors:"",
        evaluation:"",
        action: "", 
        positivity: "",
        postLevel:null

    }

    handleChange = event => {
        const inputType = event.target.name
        this.setState({
            [inputType]: event.target.value
        })
    }


    // submitEntry=(event, entry)=>{
    //     event.preventDefault()
    //     console.log('entry',entry)
    //     fetch('http://localhost:3000/entries',{
    //       method: 'POST',
    //       headers:{
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       },body:JSON.stringify({
    //         entry: {
    //           preLevel: entry.preLevel,
    //           stressors: entry.stressors,
    //           evaluation: entry.evaluation
    //         }
    //       })
    //     })
    //     .then(res=>res.json())
    //     .then(data => {
    //         console.log('Response Data', data);
    //         this.setState({ user: data.user });
    //         this.props.history.push('/welcome');
    //     })
    //   }

    submitEntry=(event, entry)=>{
        event.preventDefault()
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
            <label>Stress Level: {this.state.preLevel}</label>
            <br/>
            <input type="range" min="1" max="10" step="1" onChange={this.handleChange} name="preLevel"/>
            <br/>
                {/* <datalist id="tickmarks">
                    <option value="1" label="1">1</option>
                    <option value="2" label="2">2</option>
                    <option value="3" label="3"/>
                    <option value="4" label="4"/>
                    <option value="5" label="5"/>
                    <option value="6" label="6"/>
                    <option value="7" label="7"/>
                    <option value="8" label="8"/>
                    <option value="9" label="9"/>
                    <option value="10" label="10"/>
                </datalist> */}
            <br/>
            <div>
            <br/>
                <div>
                    <label htmlFor="stressors">What is making you feel stressed?</label>
                    <br/><br/>
                    <textarea id="stressors" name="stressors" 
                    onChange={this.handleChange}
                    className="input-textarea"
                    placeholder={"Write what is making you feel stressed. The more specific you are, the better you can plan how to handle what is causing your stress."}
                    />
                </div>
                <br/>
                <div>
                    <label>What can you do to reduce your stress?</label>
                    <br/><br/>
                    <textarea name="evaluation" 
                    onChange={this.handleChange}
                    className="input-textarea"
                    placeholder={"Think about what you can do to minimize or even remove the stressors in your life. These should be specific actions you can take."}
                    />
                </div>
            </div>
            <br/>
            <p>Take a break for some self care. Do something just for you!</p>
            <br/>
            <div>
                <label>What did you do for your self care?</label>
                <br/><br/>
                <textarea name="action" 
                onChange={this.handleChange}
                className="input-textarea"
                placeholder={"Put your device down and do something just for you. This is self care. When you are done, write what you did. This is a good way to keep track of your self care and hold yourself accountable for practicing self care."}
                />
            </div>
            <br/>
            <div>
                <label>Write something that makes you happy!</label>
                <br/><br/>
                <textarea name="positivity" 
                onChange={this.handleChange}
                className="input-textarea"
                placeholder={"Write something that makes you happy. This can be a good memory, something you are looking forward to, or something good that happened today."}
                /> 
            </div> 
            {/* <div>
                <label>Updated Stress Level: </label>
                <br/>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
            </div> */}
            <br/>
            <label>Updated Stress Level: {this.state.postLevel}</label>
            <br/><br/>
            <input type="range" min="1" max="10" step="1" onChange={this.handleChange} name="postLevel"/>
            <br/>
            <br/>
            <input type="Submit" className="btn"/>
            <br/><br/>
        </form>
        <br/><br/>
        </div>
    )}
}

export default withRouter(EntryForm)

