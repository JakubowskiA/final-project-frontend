import React, { Component, Fragment } from 'react';
import allIdeas from './Data'

class SelfCare extends Component {
    state={
        searchTerm:"Active",
        ideas:[]
    }

    filterOptions=(event)=>{
        this.setState({searchTerm:event.target.value})
    }

    // filterOptions=(event)=>{
    //     console.log('wre',event.target.innerText);
        
    //     this.setState({searchTerm:event.target.innerText})
    //     
    //     let filteredIdeas = allIdeas.filter(idea=>
    //         idea.Tags.includes(this.state.searchTerm.toLowerCase()))
    //     this.setState({ideas:filteredIdeas})
    // }
        
    render(){
            let ideas = allIdeas.filter(idea=>
                idea.Tags.includes(this.state.searchTerm.toLowerCase()))
            
            const ideasArray = ideas.map(
                idea=>(
                    <li className="elevenpt">{idea.Name}</li>
                )
            )
        
        console.log('state', this.state.searchTerm)
        return(
            <Fragment>
                <div className="sc-container">
                <br/>
                <h2 className="style-font">Self Care Ideas</h2>
                
                <p>Choose an option to see self care ideas.</p>
                <form>
                    <select onChange={this.filterOptions}>
                        <option value="Active">Active</option>
                        <option value="Charitable">Charitable</option>
                        <option value="Creative">Creative</option>
                        <option value="Nourishing">Nourishing</option>
                        <option value="Productive">Productive</option>
                        <option value="Quick Fix">Quick Fix</option>
                        <option value="Relaxing">Relaxing</option>
                        <option value="Social">Social</option>
                    </select>
                </form>
                <br/>
                <div className="sc-container-points">
                    <ul className="page-left">{ideasArray}</ul>
                    <br/><br/>
                </div>
                <br/><br/>
                </div>
                <br/><br/>
            </Fragment>
        )
    }
}

export default SelfCare
