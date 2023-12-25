const express = require('express');
const connectDB = require('./config/db.js');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Apply cors to avoid cors policy error
app.use(cors({ AccessControlAllowOrigin: '*' }))

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(bodyParser.json({ extended: false }))

// Define Routes here
app.use('/api/users', require('./routes/users.js'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/contacts', require('./routes/contacts.js'));

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the Contact Manager API' })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()  => console.log(`Server started on port ${PORT}`));