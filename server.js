const express = require('express')
const app = express()

//Setting page
app.set('views', './views');
app.set('view engine', 'ejs');

//home page route
app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Eric'})
})

app.get('login', (req, res) => {
    res.render('login')
})

app.get('register', (req, res) => {
    res.render('register')
})

app.listen(3000)