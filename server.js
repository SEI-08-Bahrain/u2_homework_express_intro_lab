const express = require('express')

const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
const database = require('./data/jasmi-menu')
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Jasmis!</h1>')
})

app.get('/home', (req, res) => {
  res.render('home')
})

const menus = database.getAll()
app.get('/menuitems', (req, res) => {
  res.render('menuItems/index', { menus })
})

app.listen(3000, () => {
  console.log('Listening on 3000...')
})
