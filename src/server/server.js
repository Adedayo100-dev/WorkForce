const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
// const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const connectDB  = require('./config/db');


// Passport config
require('./config/passport.js')(passport)


// Connect to DataBase(MongoDB)
connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Handle CORS
app.use(cors());

//Session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    // cookie: { secure: true }
}))

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())


app.get('/', (req, res) => {
    res.send('Hello World of Dayo! This is all API');
});


// WorkShifts API Route Section

app.use('/api/worksList', require('./routes/worksRoutes'));


// Shopping List API section

app.use('/api/shopping', require('./routes/shoppingRoutes'));


// Transactions API section

app.use('/api/transactions', require('./routes/transactionsRoutes'));


app.use(errorHandler)

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send("We think you are lost!");
})

// Handler for Error 500
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.sendFile(path.join(_dirname, '../public/500.html'))
// })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
