const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const fileUpload = require('express-fileupload');
var cors = require('cors');

const app = express();

// Body Parser Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.use(fileUpload());

// Avatar upload endpoint
app.post('/avatars', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file was uploaded' });
    }

    const file = req.files.avatar;

    file.mv(`${__dirname}/uploads/${file.name.replace(/ /g, '-')}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({
            avatar: file.name.replace(/ /g, '-'),
            filePath: `/uploads/${file.name.replace(/ /g, '-')}`,
        });
    });
});

app.post('/alluploads', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No image was uploaded' });
    }

    const file = req.files.featured;

    file.mv(`${__dirname}/uploads/${file.name.replace(/ /g, '-')}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({
            featured: file.name.replace(/ /g, '-'),
            filePath: `/uploads/${file.name.replace(/ /g, '-')}`,
        });
    });
});

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/emails', require('./routes/api/emails'));
app.use('/api/quotes', require('./routes/api/quotes'));
app.use('/api/tickets', require('./routes/api/tickets'));

var filesPath = path.join(__dirname, 'uploads');

app.use('/uploads', express.static(filesPath));

app.use(express.static('client/build'));
app.use('/uploads', express.static(filesPath));

app.get('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = 5073;

app.listen(PORT, () =>
    console.log(`Ferocious Media Server is running @ ${PORT}`)
);
