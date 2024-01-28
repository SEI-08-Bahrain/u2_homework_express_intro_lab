const express = require('express')
const path = require('path')
const app = express()
const database = require('./data/jasmi-menu')
const { get } = require('http')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/menuItems', (req, res) => {
  // const menuItems = database.getAll()
  res.render('menuItems/index', { menuItems: database.getAll() })
})
app.listen(3000, () => {
  console.log('listening on port 3000')
})
