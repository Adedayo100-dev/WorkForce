const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env'});
const {errorHandler} = require('./middleware/errorMiddleware');
// const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const app = express();
const connectDB  = require('./config/db');



// Handle CORS
app.use(cors());

// Passport config
require('./config/passport.js')(passport)


// Connect to DataBase(MongoDB)
connectDB()

//Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Session
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({mongoUrl: process.env.MONGO_URI,}),
    })
)

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())



//Index and Auth Route 

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

// API Routes(worksList, shopping, transactions)
app.use('/api', require('./routes/api.js'))


// app.use(errorHandler)

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send("We think you are lost or you misspelt the link!");
})

// Handler for Error 500
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.sendFile(path.join(_dirname, '../public/500.html'))
// })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Handling Error
// process.on("unhandledRejection", err => {
//     console.log(`An error occurred: ${err.message}`)
// })
