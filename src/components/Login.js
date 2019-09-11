import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

class Login extends Component{
 state={
    email: "",
    password: ""
 }

 // Controls form inputs
 handleChange = event => {
    const inputType = event.target.name
    this.setState({
        [inputType]: event.target.value
    })
}

render() {
    return (
        <div >
            <br /><br /><br />
            <div className="login-card">
            <h1>Welcome to Serene!</h1>
            <br/>
            <div className="login-card-inner">
            <h3 >Sign In</h3>
            <br/>
            <Form onSubmit={_ => this.props.login(this.state)} >

                <Form.Field>
                    <Form.Input className="login-card-input" placeholder="Enter your email address" name="email" onChange={this.handleChange} value={this.state.email} />
                </Form.Field>
                <br />
                <Form.Field>
                    <Form.Input className="login-card-input" type="password" placeholder="Enter your password" name="password" onChange={this.handleChange} value={this.state.password} />
                </Form.Field>

                <br />
                <Form.Button>Submit</Form.Button>
            </Form>
            <br/>
            <h4 className="login-card-inner">New User?</h4>
            <h4 className="login-card-inner"><a className="hvr-grow" onClick={_ => this.props.history.push('/signup')}>Sign up here!</a></h4>
            </div>
            </div>
        </div>
    )
}
}

export default withRouter(Login)