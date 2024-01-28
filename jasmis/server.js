const express = require("express")
const path = require('path');
const app = express()

// require the To Do "database"
const database = require('./data/jasmi-menu');


app.get("/", (req, res) => {
  res.send("<h1>Welcome to Jasmis!<h1>")
})

app.get("/home", (req, res) => {
  //Use the render method to render the home template
  res.render("home")
})
app.get('/menuItems', (req,res)=>{
  const menuItems  = database.getAll()
  res.render("menuItems/index", {
    menuItems
  });
})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
