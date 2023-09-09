import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config/config.env' });
import { errorHandler } from './middleware/errorMiddleware.js';
import passport from 'passport';
import jwt from "jsonwebtoken"
import session from 'express-session';
import MongoStore from 'connect-mongo';
const app = express();
import  http from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server, { cors: { origin: "*"}});
import cors from 'cors';
import connectDB from './config/db.js';
// GraphQL
import * as graphQLScript from './graphQL/index.js';

// import * as watchers from './watchers/watchers.js';
// watchers(io);



// Handle CORS
app.use(cors());

// Passport config
import configurePassport from './config/passport.js';

// Assuming 'passport' is defined or imported elsewhere in your code
configurePassport(passport);


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
import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
app.use('/', indexRouter)
app.use('/auth', authRouter)

//:: API Routes(worksList, shopping, transactions)
import apiRouter from './routes/api.js';

app.use('/api', apiRouter);


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
