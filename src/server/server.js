const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB  = require('./config/db');
// const path = require('path');

connectDB()

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// REad db.json
// fs.readFile("./db.json", "utf8", (err, data) => {
//     if (err) throw err;
//     try {
//         let dbObj = JSON.parse(data);
//         console.log(dbObj.jobs.worksList);
//         worksList = dbObj.jobs.worksList;
//         shoppingList = dbObj.shopping;
//         transactions = dbObj.transactions;
//     } catch (error) {
//         console.log('Error parsing JSON', err);
//     }
// });


// Handle CORS
app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


app.get('/', (req, res) => {
    res.send('Hello World of Dayo! This is all API');
});

// Handler for 404 - Resource Not Found
// app.use((req, res, next) => {
//     res.status(404).send("We think you are lost!");
// })

// Handler for Error 500
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.sendFile(path.join(_dirname, '../public/500.html'))
// })


// WorkShifts API Route Section

app.use('/api/worksList', require('./routes/worksRoutes'));


// Shopping List API section

app.use('/api/shopping', require('./routes/shoppingRoutes'));


// Transactions API section

app.use('/api/transactions', require('./routes/transactionsRoutes'));


app.use(errorHandler)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
