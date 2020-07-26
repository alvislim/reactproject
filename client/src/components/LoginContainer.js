import React, { Component } from 'react'
import LoginLabel from './LoginLabel'
import Message from './ErrorMessage'
import GoogleLogin from 'react-google-login'
import axios from 'axios'


class LoginContainer extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loginError: [],
            successMsg: ''
        }
    }

    handleSubmit = async (e) => {
    try {
        e.preventDefault()
        let data = { ...this.state }
        const response = await axios.post("http://localhost:5000/login", data, { withCredentials: true })
        // console.log(response.data.user)
        if(response.data.success) {
            this.props.history.push('/dashboard') 
        }
    } catch (err) {
        console.log(err.response.data.error)
        const errors = err.response.data.error;
        this.setState({
            loginError: [errors]
        })
    }
}
    
    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({ [id]: value })
    }

    responseGoogle = (response) => {
        console.log(response)
        console.log(response.profileObj)
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.loginError != null && this.state.loginError.map((err,i) => {
                    return (
                        <Message key={i} msg={err.msg}/> 
                    )
                })}
                <LoginLabel {...this.state} handleChange = {this.handleChange}/>
                <GoogleLogin 
                    clientId='825484293224-ridcbmjkgra0tiubl10q2fcpaqre5bj5.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </form>
        )
    }
}

export default LoginContainer


