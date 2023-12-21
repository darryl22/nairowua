const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('index.ejs')
})

app.get('/ourstory', (request, response) => {
    response.render('ourstory.ejs')
})

app.get('/store', (request, response) => {
    response.render('store.ejs')
})

app.get('/christmas', (request, response) => {
    response.render('christmas.ejs')
})

app.get('/beverages', (request, response) => {
    response.render('drinks.ejs')
})

app.get('/reservations', (request, response) => {
    response.render('reservations.ejs')
})

app.listen(PORT, () => console.log(`app started on port ${PORT}`))