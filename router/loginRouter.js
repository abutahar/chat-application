// external imports
const express = require('express')

// internal imports
const {getLogin} = require('../controller/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtml');

const router = express.Router(); 

router.get("/",decorateHtmlResponse("Login"), getLogin)

module.exports = router;