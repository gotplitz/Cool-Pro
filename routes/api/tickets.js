const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

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

// Models Import
const Ticket = require('../../models/Ticket');
const Profile = require('../../models/Profile');
const User = require('../../models/Users');

// @route       GET api/tickets
// @description Get all the tickets
// @access      Private
router.get('/', auth, async (req, res) => {
    try {
        const tickets = await Ticket.find().sort({ date: -1 });
        res.json(tickets);
    } catch (err) {
        console.error(err.messsage);
        res.status(500).send('Server error getting tickets');
    }
});

// @route       GET api/tickets/:id
// @description Get a ticket by id
// @access      Private
router.get('/:id', auth, async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({ msg: 'Ticket Not Found' });
        }

        res.json(ticket);
    } catch (err) {
        console.error(err.messsage);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Ticket Not Found' });
        }
        res.status(500).send('Server error getting ticket');
    }
});

// @route       POST api/tickets
// @description Post a new ticket
// @access      Private
router.post(
    '/',
    [
        auth,
        [
            check('tickettitle', 'Identify this ticket').not().isEmpty(),
            check('equipmentbrand', 'Equipment brand required').not().isEmpty(),
            check('ticketdetails', 'Explain your support request')
                .not()
                .isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const emailTemplateSource = fs.readFileSync(
                path.join(
                    __dirname,
                    '../../htmltemplates/support-template.hbs'
                ),
                'utf8'
            );
            const template = handlebars.compile(emailTemplateSource);

            const htmlToSend = template({
                tickettitle: `${req.body.tickettitle}`,
                purchasedate: `${req.body.purchasedate}`,
                equipmentbrand: `${req.body.equipmentbrand}`,
                ticketdetails: `${req.body.ticketdetails}`,
                photo: `${user.photo}`,
                name: `${user.name}`,
                email: `${user.email}`,
                phonenumber: `${user.phonenumber}`,
                user: `${req.user.id}`,
            });

            const newTicket = new Ticket({
                tickettitle: req.body.tickettitle,
                purchasedate: req.body.purchasedate,
                equipmentbrand: req.body.equipmentbrand,
                ticketdetails: req.body.ticketdetails,
                photo: user.photo,
                name: user.name,
                email: user.email,
                phonenumber: user.phonenumber,
                user: req.user.id,
            });

            const ticket = await newTicket.save();

            res.json(ticket);

            const mailOptions = {
                from: `"${newTicket.name}" <postmaster@mg.ferociousmediaweb.com>`,
                to: `${newTicket.email}`,
                cc: `norman@ferociousmedia.com`,
                // bcc: `norman@ferociousmedia.com`,
                replyTo: `${newTicket.email}`,
                subject: `Support Ticket opened: ${newTicket.tickettitle}`,
                text: newTicket.ticketdetails,
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
            res.status(500).send('Server error in ticket posting');
        }
    }
);

// @route       POST api/tickets/discussion/:id
// @description Comment on a post
// @access      Private
router.post(
    '/discussion/:id',
    [
        auth,
        [check('discussion', 'Discussion field is required').not().isEmpty()],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');
            const ticket = await Ticket.findById(req.params.id);

            const newDiscussion = {
                discussion: req.body.discussion,
                photo: user.photo,
                name: user.name,
                user: req.user.id,
            };

            ticket.discussions.unshift(newDiscussion);

            await ticket.save();

            res.json(ticket.discussions);

            let transporter = nodemailer.createTransport({
                host: 'mail.plitz.website',
                port: 465,
                secure: true,
                auth: {
                    user: 'hello@plitz.website',
                    pass: 'Megan2302$',
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });

            // setup email data with unicode symbols
            let info = transporter.sendMail({
                from: '"Cool Pro Mechanical" <marketing@licoolpro.com>',
                to: `${ticket.email}`,
                bcc: 'marketing@licoolpro.com',
                subject: `Discussion to Ticket ${ticket._id}`,
                text: req.body.discussion,
                html: `<p><b>Replied by:</b> ${newDiscussion.name}</p>
                <p><b>Reply:</b> ${newDiscussion.discussion}</p>
                <p><a href="https://testing.licoolpro.com/tickets/${ticket._id}">Click here to respond</a></p>`,
            });
        } catch (err) {
            console.error(err.messsage);
            res.status(500).send('Server Error in discussion');
        }
    }
);

module.exports = router;
