const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
 res.send(`<form action="/result" method = "POST">
                <span style="margin-right:10px;">
                    <label >Name</label>
                </span>
                <span style="margin-right:10px;";>
                    <input name="name" type="text">
                </span>
                <span style="margin-right:10px;";>
                    <label>Age</label>
                </span>
                <span style="margin-right:10px;";>
                    <input name="age" type="text">
                </span>
                <span style="margin-right:10px;">
                    <input type="submit" name="Submit Query">
                </span>`);
});
app.post('/result', (req, res, next) =>{
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} ${age}`);
});
app.listen(3000);