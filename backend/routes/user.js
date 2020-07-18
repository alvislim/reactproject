const register = require('../controller/registerHandler')
const login = require('../controller/loginHandler')
const getUser = require('../controller/getUser')
const { autheticationPassed } = require('../config/auth')

module.exports = app => {
    app.route('/register').post(register.addUser)

    app.route('/login').post(login.login)

    app.route('/user').get(autheticationPassed, getUser.getUser)
}