const express = require('express');
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routes");



// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }
  

// Static directory
app.use(express.static('public'));

// Routes
app.use(routes);

// REACT 
// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
  


// Syncing our sequelize models and then starting our Express app


db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
});