const express = require("express")
const app = express()
const path = require("path")
const database = require("./data/jasmi-menu")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/menuItems", (req, res) => {
  const menuItem = database.getAll()
  res.render("menuItems/index", { menuItem })
})

app.listen(3000, () => {
  console.log("Listening to port 3000")
})
