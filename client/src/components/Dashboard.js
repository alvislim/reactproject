import React, { Component } from 'react'
import axios from 'axios'
import Axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            user: ''
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:5000/user')
            console.log(response)
        } catch (err) {
            console.log(err.response)
            this.props.history.push('/login')
        }
    }
    
    render() {
        return (
            <button onClick={this.props.handleLogout}>LogOut</button>
        )
    }
}


export default Dashboard