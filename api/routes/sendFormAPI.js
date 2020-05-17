
require('dotenv').config();

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/', function (req, res, next) {
    const smtpTrans = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }),
    mailOpts = {
        from: 'craigbauer23@gmail.com', // This is ignored by Gmail
        to: 'craigbauerwebdev@gmail.com',
        subject: 'New message from contact form at craigbauerwebdev',
        html: `<div>${req.body.name}</div><div>From: ${req.body.email}</div> <div>says: ${req.body.message}</div>`
    }
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.send('contact-failure', error) // Send failure
        }
        else {
            res.send('contact-success') // Send success
        }
    })
});

module.exports = router;