//internal import
const express = require('express')

// extenal imports
const { getUsers } = require('../controller/usersController')

const router = express.Router()

router.get('user', getUsers)

module.exports = router
