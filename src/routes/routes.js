const router = require('express').Router()
const controller = require('../controllers/controllers')

router.get('/send', controller.sendMail)
router.post('/mail', controller.mail)

module.exports = router;