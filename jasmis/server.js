const express = require("express")
const app = express()
const path = require("path")

// require the To Do "database"
const database = require("./data/jasmi-menu")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Jasmis!<h1>")
})

app.get("/", (req, res) => {
  //Use the render method to render the home template
  res.render("home")
})

app.get("/menuItems", (req, res) => {
  const items = database.getAll()
  res.render("menuItems/index", { items })
})
app.listen(3000, () => {
  console.log("listening on port 3000")
})
