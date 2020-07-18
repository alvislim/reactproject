const mongoose = require('mongoose')

module.exports = loginHandler = {
    getUser: (req, res) => {
        res.send(req.user)
    }
}