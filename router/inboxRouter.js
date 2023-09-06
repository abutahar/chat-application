//internal import
const express = require('express')

// extenal imports
const decorateHtmlResponse = require('../middlewares/common/decorateHtml')
const { getInbox } = require('../controller/inboxController')

const router = express.Router()

router.get("/",decorateHtmlResponse("Inbox"), getInbox)

module.exports = router; 
