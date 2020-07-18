// Express dependency
const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors())

app.use(cookieParser('secret'))

//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const passport = require('passport');
require('./config/passport')(passport);

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(passport.initialize());

app.use(passport.session());

const connectDB = require('./config/db')

// Env
require('dotenv').config({ path: './config/config.env' })
connectDB()

require('./routes/user')(app);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))