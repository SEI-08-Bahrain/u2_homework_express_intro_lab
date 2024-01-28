const express = require('express')
const path = require('path')

const app = express()

const database = require('./data/jasmis-menu')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// app.get('/', (req, res) => {
//   res.send('<h1>Welcome to Jasmis</h1>')
// })

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/menuItems', (req, res) => {
  const menu = database.getAll()
  res.render('menuItems/index', { menu })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
