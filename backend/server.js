// Express dependency
const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors')
const passport = require('passport');
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')

// Env
require('dotenv').config({ path: './config/config.env' })
connectDB()

//Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
      })
);

app.use(cookieParser('secret'))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

require('./routes/user')(app);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))