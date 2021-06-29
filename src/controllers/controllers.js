const {mailer} = require('../services/sendMail')

exports.sendMail = (req, res, next) => {

    const options = {
        to_id: req.query.to_id,
        subject: req.query.subject,
        text: req.query.text,
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

exports.mail = (req, res, next) => {
    res.send(req.body)
}
