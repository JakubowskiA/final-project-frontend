import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class NewUserForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        submitted: false
    }

    isStateValid = () => {
        return this.state.name && this.state.email && this.state.password
    }

    handleChange = event => {
        const inputType = event.target.name
        this.setState({
            [inputType]: event.target.value
        })
    }

    handleClick=()=>{
        this.setState({submitted:true})
    }

    render() {
        return (
            <div className="App">
                    <br /><br /><br />
                <div className="login-card">
                    <h1>Welcome to Serene!</h1>
                    <h3>Sign Up</h3>
                    <Form onSubmit={() => this.props.createUser(this.state)}>
                        <Form.Field>
                            <Form.Input name="name" placeholder="Enter your name" onChange={this.handleChange} value={this.state.name} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="email" type="email" placeholder="Enter your email address" onChange={this.handleChange} value={this.state.email} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="password" type="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password} />
                        </Form.Field>
                        <br />
                        <Form.Button disabled={!this.isStateValid() && this.state.submitted !== true} onClick={this.handleClick}>Create Account</Form.Button>
                    </Form>
                    
                </div>
            </div>
        )
    }
}

export default NewUserForm