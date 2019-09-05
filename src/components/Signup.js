import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class NewUserForm extends Component {
    state = {
        name: "",
        email: "",
        password: ""
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

    render() {
        return (
            <div className="App">
                <div className="login-card">
                    <br /><br />
                    <h1>Sign Up</h1>
                    <br />
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
                        <Form.Button disabled={!this.isStateValid()}>Create Account</Form.Button>
                    </Form>
                    
                </div>
            </div>
        )
    }
}

export default NewUserForm