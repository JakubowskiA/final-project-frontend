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

    // handleChangePreLevel=(event)=>{
    //     this.setState({preLevel:event.target.value})
    //     console.log(event.target.value);  
    // }

    handleChange = event => {
        const inputType = event.target.name
        this.setState({
            [inputType]: event.target.value
        })
    }

    submitEntry=(event, entry)=>{
        event.preventDefault()
        console.log('entry',entry)
        // fetch('http://localhost:3000/entries',{
        //   method: 'POST',
        //   headers:{
        //     "Content-Type": "application/json",
        //     "Accept": "application/json"
        //   },body:JSON.stringify({
        //     entry: {
        //         preLevel: entry.preLevel,
        //         stressors: entry.stressors,
        //         evaluation: entry.evaluation,
        //         action:  entry.action, 
        //         positivity:  entry.positivity,
        //         postLevel: entry.postLevel,
        //         user_id:
        //     }
        //   })
        // })
        // .then(res=>res.json())
        // .then(data => {
        //     console.log('Response Data', data);
        //     this.setState({ user: data.user });
        //     this.props.history.push('/welcome');
        // })
      }

    render(){
        console.log('OOOOZR', this.props);
        
    return(
        
        <form onSubmit={(event)=>this.submitEntry(event, this.state)}>
        <br/>
            <input type="range" min="1" max="10" step="1" onChange={this.handleChange} name="preLevel"/>
            <br/><br/>
            <label>Stress Level: {this.state.preLevel}</label>
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
                <div>
                    <label htmlFor="stressors">What is making you feel stressed?</label>
                    <br/>
                    <textarea id="stressors" name="stressors" onChange={this.handleChange}/>
                </div>
                <div>
                    <label>What can you do to reduce your stress?</label>
                    <br/>
                    <textarea name="evaluation" onChange={this.handleChange}/>
                </div>
            </div>
            <div>
                <label>What is making you feel stressed?</label>
                <br/>
                <textarea name="action" onChange={this.handleChange}/>
            </div>
            <div>
                <label>What is making you feel stressed?</label>
                <br/>
                <textarea name="positivity" onChange={this.handleChange}/> 
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
            <input type="range" min="1" max="10" step="1" onChange={this.handleChange} name="postLevel"/>
            <br/><br/>
            <label>Updated Stress Level: {this.state.postLevel}</label>
            <br/>
            <br/>
            <input type="Submit"/>
        </form>
    )}
}

export default withRouter(EntryForm)

