const express = require('express');
const path = require('path')

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
  });

const database = require('./data/jasmi-menu')
// app.get('/', (req, res) => {
//     res.send('hello world')
//   })
app.get('/', (req, res) =>{
    res.render('home.ejs');
})


app.get('/menuItems',(reg, res) =>{

    let menuItems=database.getAll()
    res.render('menuItems/index.ejs',{menuItems});
    
})
