const express = require('express');
const bodyParser = require('body-parser');
const bio = require('./util/bio')
let app = express();
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 
app.get('/', function (request, response) {
    console.log(bio.portfolio.project_one.project_description)
    response.render("home",{ bio})
});

app.get('*', (request, response) => {
    response.send("Page not found")
    response.end();
})

app.listen(5000, function () {
    console.log('The page is live on http://localhost:5000/');
});