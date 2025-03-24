// Loads the express module
const express = require("express");
const hbs = require("hbs");

const bodyParser = require("body-parser");

const path = require("path");

//Creates our express server
const app = express();
const port = 3000;

//Serves static files (we need it to import a css file)
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route

// Render the initial page with the number input form
app.get("/", (req, res) => {
  res.render("views/index.hbs");
});

app.get("/happy", (req, res) => {
  let leg1 = req.query.leg1;
  let leg2 = req.query.leg2;
  res.render("views/draw.hbs", {leg1, leg2});
});

app.post("/happy", (req, res) => {
  let leg1 = req.body.leg1;
  let leg2 = req.body.leg2;
  res.render("views/draw.hbs", {leg1, leg2});
});

// Create express route binder for draw.hbs and get the data from the url as parameters
// that came from index.hbs



//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
