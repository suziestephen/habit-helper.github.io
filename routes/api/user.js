const router = require("express").Router();
const passport = require("../../config/passport");
const User = require('../../models/user');
const db = require("../..//models");
const bcrypt = require('bcrypt');


// Matches with POST /api/user/login
// Runs through the config/passport.js code because we added passport.authenticate('local') as a second parameter
// The request is sent to us via a string of random numbers and letters, and then passport
  // converts it into a user object, which is attached to the request
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea, so we only send the email and id from the user object
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

  // Matches with POST /api/user/signup
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to bcrypt
  // If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/signup", async (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then((user)=>{
        
        // User has been successfully created, so we send the full user object back to frontend to do something with it (redirect user, usually)
        res.send(user);
      })
      .catch(err => {
        res.status(500).json(err); // Something went wrong with user creation, so we're sending 500 (Server error) back to frontend
      });
});

// We use this endpoint to verify a user was previously logged in, by checking the session object. isAuthenticated() is a property provided by passport.
router.get("/logged-in", (req, res) => {
  res.json({isAuthenticated:req.isAuthenticated()});
});

router.get('/logout', (req, res) => {
  req.logout(); // This is a simple functionality provided by passport to log out a user and destroy any sessions associated with the user.
  res.send(200);
})

module.exports = router;






// // Requiring our models and passport as we've configured it
// const router = require("express").Router();
// const db = require("../..//models");
// const passport = require("../..//config/passport");  //("passport")




// router.route('/login')
//   .get((req, res) => {
    
//     console.log("\nRequest Session")
//     console.log(req.session)
//     if (req.isAuthenticated()) {
//         var currentUser = req.session.passport.user;
//         console.log("\nCurrent User")
//         console.log(currentUser)
//         db.User.findOne({
//             where: {
//                 id: currentUser 
//             }
//         }).then(dbUser => {
//             console.log("User")
//             console.log(dbUser)
//             let user = {
//                 isAuthenticated: true,
//                 user: currentUser,
//             };
//             res.json(user);
//         })

//     } else {
//         let noUser = {
//             loggedIn: false,
//             user: ''
//         };
//         res.json(noUser);
//     }
// })


// router.route("/login")
//   .post(passport.authenticate("local-login"), (req, res) => {
//     // Sending back a password, even a hashed password, isn't a good idea
//     res.json({
//       email: req.user.email,
//       id: req.user.id,
//       isAuthenticated: true,
//     });
//   });

//   // Route for signing up a user.
//   router.route("/signup")
//     .post((req, res) => {
//     db.User.create(
//     req.body
//     )
//       .then(() => {
//         res.json(true);
//       })
//       .catch(err => {
//         res.status(401).json(err);
//       });
//   });



//   // Route for logging user out
//   router.route("/logout")
//   .get((req, res) => {
//     req.logout();
//     res.redirect("/");
//   });

//   // Route for getting some data about our user to be used client side
//   router.route("/user_data") 
//   .get((req, res) => {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });


// module.exports = router;











// // const passport = require("../../config/passport");
// // const router = require("express").Router();
// // const db = require("../..//models");


// //     //Login
// //     router.route("/") //what tables does this relate to?
// //     .post(passport.authenticate("local"), (req,res) => {
// //         res.json(req.user);
// //     });

// //     //Load member info
// //     router.route("/") //what tables does this relate to?
// //     .get((req,res) => {
// //         //Empty if no user is logged in
// //         if (!req.user) {
// //             res.json({
// //                 isLoggedIn: false
// //             });
// //         } else {
// //             const userName = req.user.firstName + " " + req.user.surname;
// //             res.json({
// //                 isLoggedIn: true,
// //                 userName: userName, 
// //                 authorId: req.user.id
// //             });
// //         }
// //     });

// //     //Load users
// //     router.route("/users")
// //     .get((req,res) => {
// //         db.user
// //     })

// //     //Signup new user  //api/user//users
// //     router.route("/users")
// //     .post((req,res) => {
// //         db.user
// //         .create({
// //             email: req.body.email,
// //             password: req.body.password
// //         })
// //         .then(() => {
// //             res.redirect("/"); 
// //         })
// //         .catch(err => {
// //             res.status(401).json(err);
// //         });
// //     });

// //     //Signout


