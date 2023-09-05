// external imports
const express = require('express')

// internal imports
const {getLogin} = require('../controller/loginController')

const router = express.Router(); 

router.get('/', getLogin)

module.exports = router