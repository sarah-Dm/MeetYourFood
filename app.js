const express = require("express");
const hbs = require("hbs");

const app = express(); //création d'un serveur

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

//routes
app.get("/", (req, res, next) => res.render("home"));

app.listen(3001);
