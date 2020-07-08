// Imports
// ==================================
const express = require('express')
const path = require('path')
const app = express()
// const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const hbs = require('express-handlebars');
// const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const url = require('url');

const Handlebars = require('handlebars');
const HandlebarsIntl = require('handlebars-intl');

const mongo = require('mongodb');
// ==================================
// End Imports

const port = 9950

// Routes
// ==================================

app.get('/api/add-new-client', (req, res) => {
    res.send(req.query)
})

// ==================================
// End Routes

app.listen(port, () => console.log(`App started on port ${port}`))