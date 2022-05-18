const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllerm = require('./controller/8ballController');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/js', express.static(path.join(__dirname, './views/js')));

app.get('/', (req, res, next)=>{
    
    res.render('8ballmagic');
})
app.get('/8ball', controllerm.ballControll); 

app.listen(3000);