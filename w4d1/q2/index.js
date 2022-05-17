const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(cookieParser());
app.use(session({
    secret: 'very_secret',
    saveUninitialized: true,
    resave: true,

}))
//app.use('/static', express.static(path.join(__dirname, '../static')));


app.get('/sendFile', (req,res,next)=>{
   // var filename = "index.html";
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
    let name = req.body.name;
    let age = req.body.age;
    req.session.name = name;
    req.session.age = age;
    res.redirect('/output');
});
app.get('/output', (req, res, next) =>{
  

    res.send(`Welcome ${req.session.name} ${req.session.age}`);
});
app.listen(3000);