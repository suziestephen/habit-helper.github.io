const passport = require("../../config/passport");
const router = require("express").Router();
const db = require("../..//models");


    //Login
    router.route("/") //what tables does this relate to?
    .post(passport.authenticate("local"), (req,res) => {
        res.json(req.user);
    });

    //Load member info
    router.route("/") //what tables does this relate to?
    .get((req,res) => {
        //Empty if no user is logged in
        if (!req.user) {
            res.json({
                isLoggedIn: false
            });
        } else {
            const userName = req.user.firstName + " " + req.user.surname;
            res.json({
                isLoggedIn: true,
                userName: userName, 
                authorId: req.user.id
            });
        }
    });

    //Load users
    router.route("/users")
    .get((req,res) => {
        db.user
    })

    //Signup new user  //api/user//users
    router.route("/users")
    .post((req,res) => {
        db.user
        .create({
            firstName: req.body.firstName,
            surname: req.body.surname,
            dob: req.body.dob,
            email: req.body.email,
            password: req.body.password
        })
        .then(() => {
            res.redirect("/entries"); //entries page?
        })
        .catch(err => {
            res.status(401).json(err);
        });
    });

    //Signout


module.exports = router;