const express = require('express')
const database = require('./data/jasmi-menu')
const path = require('path')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Jasmis!<h1>')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/menuItems', (req, res) => {
  const menuItems = database.getAll()
  console.log(menuItems)
  res.render('menuItems/index', { menuItems })
})

// require the To Do "database"
