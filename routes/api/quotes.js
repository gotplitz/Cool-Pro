const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

// Models Import
const Quote = require('../../models/Quote');
const Profile = require('../../models/Profile');
const User = require('../../models/Users');

// @route       GET api/quotes
// @description Get all the quotes
// @access      Private
router.get('/', auth, async (req, res) => {
    try {
        const quotes = await Quote.find().sort({ date: -1 });
        res.json(quotes);
    } catch (err) {
        console.error(err.messsage);
        res.status(500).send('Server error getting quotes');
    }
});

// @route       GET api/quotes/:id
// @description Get a quote by id
// @access      Private
router.get('/:id', auth, async (req, res) => {
    try {
        const quote = await Quote.findById(req.params.id);

        if (!quote) {
            return res.status(404).json({ msg: 'Quote Not Found' });
        }

        res.json(quote);
    } catch (err) {
        console.error(err.messsage);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Quote Not Found' });
        }
        res.status(500).send('Server error getting quote');
    }
});

// @route       POST api/quotes
// @description Post a new quote
// @access      Private
router.post(
    '/',
    [
        auth,
        [
            check('projectname', 'Name your project').not().isEmpty(),
            check('rangeone', 'A primary date is required').not().isEmpty(),
            check('rangetwo', 'A secondary date is required').not().isEmpty(),
            check('details', 'Please, explain your project').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newQuote = new Quote({
                projectname: req.body.projectname,
                rangeone: req.body.rangeone,
                rangetwo: req.body.rangetwo,
                details: req.body.details,
                photo: user.photo,
                name: user.name,
                email: user.email,
                phonenumber: user.phonenumber,
                user: req.user.id,
            });

            const quote = await newQuote.save();

            res.json(quote);

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
                to: `${quote.email}`,
                bcc: 'marketing@licoolpro.com',
                subject: 'Quote request at CoolProLI.com',
                text: req.body.projectname,
                html: `<p><b>Client Name:</b> ${newQuote.name}</p>
                <p><b>Email:</b> ${newQuote.email}</p>
                <p><b>Phone Number:</b> ${newQuote.phonenumber}</p>
                <p><b>Project Name:</b> ${newQuote.projectname}</p>
                <p><b>Visit Request option 1:</b> ${newQuote.rangeone}</p>
                <p><b>Option 2:</b> ${newQuote.rangetwo}</p>
                <p><b>Details of the Project:</b> ${newQuote.details}</p>`,
            });
        } catch (err) {
            console.error(err.messsage);
            res.status(500).send('Server error in quote posting');
        }
    }
);

// @route       POST api/quotes/response/:id
// @description Comment on a post
// @access      Private
router.post(
    '/response/:id',
    [auth, [check('response', 'Text response is required').not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');
            const quote = await Quote.findById(req.params.id);

            const newResponse = {
                response: req.body.response,
                photo: user.photo,
                name: user.name,
                user: req.user.id,
            };

            quote.responses.unshift(newResponse);

            await quote.save();

            res.json(quote.responses);

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
                to: `${quote.email}`,
                bcc: 'marketing@licoolpro.com',
                subject: `Response to Quote ${quote._id}`,
                text: req.body.response,
                html: `<p><b>Response by:</b> ${newResponse.name}</p>
                <p><b>Response:</b> ${newResponse.response}</p>
                <p><a href="https://testing.licoolpro.com/quotes/${quote._id}">Click here to respond</a></p>`,
            });
        } catch (err) {
            console.error(err.messsage);
            res.status(500).send('Server Error in comments');
        }
    }
);

module.exports = router;
