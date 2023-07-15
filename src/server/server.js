const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env'});
const {errorHandler} = require('./middleware/errorMiddleware');
const passport = require('passport');
const jwt = require("jsonwebtoken")
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: "*"}});
const cors = require('cors');
const connectDB  = require('./config/db');
require('./watchers/watchers')(io);



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
});

// Handler for Error 500
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.sendFile(path.join(_dirname, '../public/500.html'))
// })


io.on('connection', (socket) => {
    // console.log('A user connected to back-end');
    // Handle websocket events and emit data to connected clients
    io.on('employer-db-change', (data) => {
        console.log("Data changed is", data)
    })
});



const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));

// Handling Error
// process.on("unhandledRejection", err => {
//     console.log(`An error occurred: ${err.message}`)
// })
