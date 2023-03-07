const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());

var shoppingList;
var transactions;

// REad db.json
fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) throw err;
    try {
        let dbObj = JSON.parse(data);
        console.log(dbObj.jobs.worksList);
        worksList = dbObj.jobs.worksList;
        shoppingList = dbObj.shopping;
        transactions = dbObj.transactions;
    } catch (error) {
        console.log('Error parsing JSON', err);
    }
});


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
// app.use((err, re, res, next) => {
//     console.error(err.stack)
//     res.sendFile(path.join(_dirname, '../public/500.html'))
// })


// WorkShifts API Route Section
app.use('/api/worksList', require('./routes/worksListRoutes'));

// Shopping List API section

app.get('/api/shoppingList', (req, res) => {
    res.send(shoppingList);
});

// Transactions API section

app.get('/api/transactions', (req, res) => {
    res.send(transactions);
});

app.post('/api/transactions', (req, res, next) => {
    const newTransactions = {
        id: transactions.length + 1,
        amount: req.body.amount,
        rate: req.body.rate
    };
    transactions.push(newTransactions);
    res.send(transactions);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
