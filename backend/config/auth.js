module.exports = {
  autheticationPassed: function (req, res, next) {
    if (req.isAuthenticated()) 
      return next();
      res.status(200).json({
        success: true,
        msg: 'User is Authenticated',
        user: req.user
      })
  },
    autheticationFailed: function (req, res, next) {
    if (!req.isAuthenticated()) 
      return next();
        res.status(404).json({
        success: false,
        msg: 'Not Authenticated'
    })
}
}



// module.exports = {
//   autheticationPassed: function (req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     } 
//     return res.status(200).json({
//       success: true,
//       msg: 'Authenticated'
//     })
//   },
//   autheticationFailed: function (req, res, next) {
//     if (!req.isAuthenticated()) {
//       return next();
//     }
//     return res.status(404).json({
//       success: false,
//       msg: 'Not Authenticated'
//     })
//   }
// };