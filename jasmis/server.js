const express = require('express')
const app = express()
const path = require('path')
const database = require('./data/jasmi-menu')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Jasmis!<h1>')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
  //Use the render method to render the home template
  res.render('home')
})

app.get('/menuItems', (req, res) => {
  const menuItems = database.getAll()
  res.render('menuItems/index', { menuItems })
})
