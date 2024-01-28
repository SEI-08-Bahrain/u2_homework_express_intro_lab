const express = require('express')
const app = express()
const path = require('path')
const database = require('./data/jasmi-menu')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/menuitems', (req, res) => {
  const items = database.getAll()
  res.render('menuItems/index', { items })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
