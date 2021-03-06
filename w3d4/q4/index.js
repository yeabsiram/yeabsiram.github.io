const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/css', express.static(path.join(__dirname, 'css')));
//app.use('/static', express.static(path.join(__dirname, '../static')));


app.get('/sendFile', (req,res,next)=>{
    var filename = "index.html";
    res.sendFile('./static/index.html', {root: __dirname});
})

app.get('/', (req, res) => {

let css_;
const date_ = new Date();
const hour = date_.getHours();

if(hour > 6 && hour < 18)
{
    css_ = "/css/day.css";
}
else
{
    css_ = "/css/night.css";
}

res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="${css_}">
            </head>
            <body>
            <form action="/result" method = "POST">
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
            </span>
            </body>
            </html>` );
});
app.post('/result', (req, res, next) =>{
    if(req.body.name && req.body.age)
    {
        res.cookie(req.body.name, req.body.age);
    }
    res.redirect('/output');
});
app.get('/output', (req, res, next) =>{
    
    res.send('Welcome ${req.cookies.name} ${req.cookies.age}');
});
app.listen(3000);