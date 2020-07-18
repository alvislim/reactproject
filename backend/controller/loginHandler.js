const passport = require('passport')

module.exports = loginHandler = {
    login: (req, res, next) => {
        passport.authenticate('local', (error, user, info) => {
            if(error) return next(err)
            if(!user) return res.status(401).json({
                success: false,
                error: {msg: 'Incorrect Username or Password'}
            })
            else {
                req.logIn(user,err => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            msg: "Server Error",
                        })  
                    }
                    return res.status(200).json({
                        success: true,
                        msg: "User successfully login",
                        user: req.user
                    })
                })
            }
        })(req, res, next)
    }
}