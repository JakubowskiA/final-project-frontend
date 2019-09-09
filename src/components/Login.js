import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

class Login extends Component{
 state={
    email: "",
    password: ""
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
            <br /><br />
            <h1>Sign In</h1>
            <br />
            <Form onSubmit={_ => this.props.login(this.state)} >

                <Form.Field>
                    <Form.Input placeholder="Enter your email address" name="email" onChange={this.handleChange} value={this.state.email} />
                </Form.Field>
                <br />
                <Form.Field>
                    <Form.Input type="password" placeholder="Enter your password" name="password" onChange={this.handleChange} value={this.state.password} />
                </Form.Field>

                <br />
                <Form.Button>Submit</Form.Button>
            </Form>

            <h4>New User?</h4>
            <h4><a className="hvr-grow" onClick={_ => this.props.history.push('/signup')}>Sign up here!</a></h4>
            
        </div>
    )
}
}

export default withRouter(Login)