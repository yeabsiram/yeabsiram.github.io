const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res)=>{
   
    res.render('addCookie', {items: req.cookies});

})
app.post('/addCookie', (req, res)=>{

    if(req.body.key && req.body.value)
    {
        let key = req.body.key;
        let value = req.body.value;
        res.cookie(key, value);
    }
    res.redirect('/');
})

app.listen(3000);