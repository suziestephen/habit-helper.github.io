const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const path = require("path");
const cors = require("cors")

const PORT = process.env.PORT || 3001;
const db = require('./models');


const app = express();

//Cors
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  
}));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize middleware, intialize passport
app.use(passport.initialize());
// Initialize middleware to alter the request object and deserialize "user" session ID from the request into a proper user object
app.use(passport.session());




 


//Routes
const routes = require("./routes");
// Add routes, both API and view
app.use(routes);


// REACT 
// Send every request to the React app
// Define any API routes before this runs
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
});
