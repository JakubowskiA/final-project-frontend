import React, { Component, Fragment } from 'react';

class SelfCare extends Component {
    state={
        filter:""
    }

    filterOptions=(event)=>{
        this.setState({filter:event.target.value})
    }

    render(){
        console.log('state', this.state.filter)
        return(
            <Fragment>
                <h2>Self Care Ideas</h2>
                <form>
                    <label>Choose a type of self care: </label>
                    <select onChange={this.filterOptions}>
                        <option value="books">Books</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="php">PHP</option>
                        <option value="js">JavaScript</option>
                    </select>
                </form>
                
                <div>
                    <ul></ul>
                </div>
            </Fragment>
        )
    }
}

export default SelfCare
