module.exports = logOutHandler = {
    logout: (req,res,next) => {
        req.logout()
        return res.status(200).json({
            sucess: true
        })
    }
}