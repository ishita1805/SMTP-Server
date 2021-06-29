const router = require('express').Router()
const controller = require('../controllers/controllers')

router.post('/send', controller.sendMail)

module.exports = router;