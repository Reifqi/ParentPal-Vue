var userService = require('./userService')

// eslint-disable-next-line no-unused-vars
var createUserControllerFn = async (req, res) => {
  try {
    console.log(req.body)
    var status = await userService.createUserDBService(req.body)
    console.log(status)

    if (status) {
      res.send({'status': true, 'message': 'user created successfully'})
    } else {
      res.semd({'status': false, 'message': 'error creating user'})
    }
  } catch (err) {
    console.log(err)
  }
}

var loginUserControllerFn = async (req, res) => {
  var result = null
  try {
    result = await userService.loginUserDBService(req.body)

    if (result.status) {
      res.send({'status': true, 'message': result.msg})
    } else {
      res.semd({'status': false, 'message': result.msg})
    }
  } catch (error) {
    console.log(error)
    res.send({'status': false, 'message': error.msg})
  }
}

module.exports = {createUserControllerFn, loginUserControllerFn}
