const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, "./templates/view"));
app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res,next) =>{

    res.render("forms.ejs");
});
app.post('/result', (req, res, next)=>{
    let name = req.body.name;
    let age = req.body.age;
    console.log(age);

    res.redirect(`/output?name=${name}&age=${age}`);
} )

app.get('/output', (req, res, next) =>{
    let name = req.query.name;
    let age = req.query.age;
    console.log(age);
    res.render('output', {"name" :name, "age": age});
})

app.listen(3000);