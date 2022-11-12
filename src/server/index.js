const express = require('express');
const app = express();
const fs = require('fs');

var worksList;
// REad db.json
fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) throw err;
    try {
        let dbObj = JSON.parse(data);
        console.log(dbObj.worksList);
        worksList = dbObj.worksList;
    } catch (error) {
        console.lor('Error parsing JSON', err);
    }
});


app.use(express.json());

// const worksList = [
//     {"id": 1, "loc": "LCBO & PRO-BELL", "dates": ["Feb 17, 2022 - Apr, 2022"], "pay": 2027.63, "payStatus": true},
//     {"id": 2, "loc": "Olivieri", "dates": ["Thur May 5, 2022"], "pay": 112.32, "payStatus": true},
//     {"id": 3, "loc": "Amazon", "dates": ["Fri May 6, 2022", "Sat May 7, 2022"], "pay": 231.68, "payStatus": true},
// ];

// Handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World of Dayo!');
});

app.get('/api/worksList', (req, res) => {
    res.send(worksList);
});

app.post('/api/worksList', (req, res) => {
    const course = {
        id: worksList.length + 1,
        name: req.body.name
    };
    worksList.push(course);
    res.send(course);
})

app.get('api/worksList/:id', (req, res) => {
    res.send(req.params.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
