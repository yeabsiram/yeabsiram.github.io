const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './templates/view'));
app.use('css', express.static(path.join(__dirname, './css')));

let product = [{"id": "123", "name": "Spachula", "description": "Great Spachula", "price": "10$"},
{"id":"124","name":"Plate","description":"Nice Plate","price":"$4"},
{"id":"125","name":"Knife","description":"Sharp Knife","price":"$8"},
];

let shoppingcart = [{"id": "123", "name": "Spachula", "quantity": "3", "price": "10$"},
{"id":"124","name":"Plate","quantity":"2","price":"$4"},
{"id":"125","name":"Knife","quantity":"1","price":"$8"},
];


app.get('/', (req,res, next)=>{
    res.redirect('/product');
})
app.get('/product', (req, res, next) =>{
   
    res.render('product', {product});
})
app.get('/shoppingcart', (req, res)=>{
    res.render('shoppingcart', {shoppingcart});
})



app.listen(3000);