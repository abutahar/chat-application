//internal import
const express = require('express')

// extenal imports
const { getUsers } = require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtml')

const router = express.Router()

router.get("/",decorateHtmlResponse("Users"), getUsers)

module.exports = router;
