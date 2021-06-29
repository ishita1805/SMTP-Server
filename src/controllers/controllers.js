const {mailer} = require('../services/sendMail')

exports.sendMail = (req, res, next) => {

    const options = {
        to_id: req.body.to_id,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html,
    }

    mailer(options)
        .then((response) => {
            res.status(200).json({
                message:'Mail sent',
                response
            })
        })
        .catch((e) => {
            res.status(500).json({
                message:'Error occured',
                e
            })
        })
}
