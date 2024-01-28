const express = require("express")
const app = express()
const path = require("path")
// require the To Do "database"
const database = require("./data/jasmi-menu")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.render("home")
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})

app.get("/menuItems", (req, res) => {
  const list = database.getAll()
  res.render("menuItems", { list })
})
