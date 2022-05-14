const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use('css', express.static(path.join(__dirname, './css')));
app.set('views', path.join(__dirname, './templates/view'));

app.get('/', (req,res, next)=>{
    res.redirect('/product');
})
app.get('/product', (req, res, next) =>{
    let product = [{"id": "123", "name": "Spachula", "description": "A very good spachula", "price": "10$"},
        {"id":"124","name":"Plate","description":"White plate","price":"$4"},
        {"id":"125","name":"Knife","description":"Sharp knife","price":"$8"},
        ]
    res.render('product', {product});
})

app.listen(3000);

// {"id":"123", "name":"Spachula",
//     "description": "A very good spachula",
//     "price": "10$"})