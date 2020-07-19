const register = require('../controller/registerHandler')
const login = require('../controller/loginHandler')
const getUser = require('../controller/getUser')
const { autheticationPassed } = require('../config/auth')

module.exports = app => {
    app.post('/login', login.login)

    app.post('/register', register.addUser)

    app.get('/user', getUser.getUser)
}