const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Email = require('../../models/Emails');

// email setup
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const mailgunAuth = {
    auth: {
        api_key: 'key-892b6a66c2f9dba1421caed942d29a23',
        domain: 'mg.ferociousmediaweb.com',
    },
};

const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

// @route       GET api/emails
// @description Get all emails
// @access      Public
router.get('/', async (req, res) => {
    try {
        const emails = await Email.find().sort({ date: -1 });
        res.json(emails);
    } catch (err) {
        console.error(err.messsage);
        res.status(500).send('Server Error getting emails');
    }
});

// @route       POST api/emails
// @description Post new email
// @access      Public
router.post(
    '/',
    [
        [
            check('fullname', 'Full Name is Required').not().isEmpty(),
            check('email', 'Emails is Required').not().isEmpty(),
            check('message', 'Message is Required').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const emailTemplateSource = fs.readFileSync(
                path.join(__dirname, '../../htmltemplates/email-template.hbs'),
                'utf8'
            );
            const template = handlebars.compile(emailTemplateSource);

            const htmlToSend = template({
                fullname: `${req.body.fullname}`,
                phone: `${req.body.phone}`,
                email: `${req.body.email}`,
                message: `${req.body.message}`,
            });

            let newEmail = new Email({
                fullname: req.body.fullname,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message,
            });

            const email = await newEmail.save();

            res.json(email);

            const mailOptions = {
                from: `"${req.body.fullname}" <postmaster@mg.ferociousmediaweb.com>`,
                to: `licoolpro@gmail.com`,
                bcc: `norman@ferociousmedia.com`,
                replyTo: `${req.body.email}`,
                subject: 'New lead for Cool Pro Mechanical',
                html: htmlToSend,
            };

            smtpTransport.sendMail(mailOptions, (err, data) => {
                console.log(err);
                if (err) {
                    res.json({
                        msg: 'fail',
                    });
                } else {
                    res.json({
                        msg: 'success',
                    });
                }
            });
        } catch (err) {
            console.error(err.messsage);
            res.status(500).send('Server Error Sending Email');
        }
    }
);

module.exports = router;
