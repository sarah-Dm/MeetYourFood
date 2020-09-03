const express = require("express");
const hbs = require("hbs");

const app = express(); //création d'un serveur

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

//routes
app.get("/", (req, res, next) => {
  const data = {
    layout: false,
  };
  res.render("home", data);
});

app.get("/resultats", (req, res, next) => {
  res.render("resultat-recherche");
});

app.listen(3001);
