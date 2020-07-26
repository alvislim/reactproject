import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:5000/user', { withCredentials: true })
            console.log(response.data)
            if(response.data) this.setState({name: response.data.name})
            else this.props.history.push('/login') 
        } catch (err) {
            console.log(err.response)
            this.props.history.push('/login')
        }
    }

    handleLogout = async (e) => {
        try {
            console.log('hi')
            const response = await axios.get('http://localhost:5000/logout', { withCredentials: true })
            console.log(response)
            this.props.history.push('/login')
        } catch (err) {
            console.log(err.response)
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.name}</h1>
                <button onClick={this.handleLogout}>LogOut</button>
            </div>
        )
    }
}


export default Dashboard