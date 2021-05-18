const router = require("express").Router();
const db = require("../..//models");
// const isAuthenticated = require("../../config/middleware/isAuthenticated");



// Matches with "/api/entries"


    router.route("/gratitude")
    .get((req, res) => {
        db.Gratitude.findAll({
            where: {
                userId: userId
            }
        }).
        then((dbGratitude) => res.json(dbGratitude));
    })

    router.route("/reading")
    .get((req, res) => {
        db.Reading.findAll({
            where: {
                userId: id
            }
        })
        .then((dbReading) => res.json(dbReading));
    })

    router.route("/exercise")
    .get((req, res) => {
        db.Exercise.findAll({  
            where: {
            userId: id
        }
        })
        .then((dbExercise) => res.json(dbExercise));
    })


    // POST route for saving a new reading entry
    router.route("/gratitude")
    .post((req, res) => {
        console.log(req.user);
        db.Gratitude.create({
            userId: req.user.id,
            gratefulFor: req.body.gratefulFor,
            dayOf: req.body.dayOf,
        }).then((dbGratitude) => res.json(dbGratitude));
    })

    //     // POST route for saving a new reading entry
    router.route("/reading")
    .post((req, res) => {
        console.log(req.users);
        db.Reading.create({
            userId: req.users.id,
            book: req.body.book,
            pages: req.body.pages,
            dayOf: req.body.dayOf,
        }).then((dbReading) => res.json(dbReading));
    })

    //     // POST route for saving a new exercise entry
    router.route("/exercise")
    .post((req, res) => {
        console.log(req.body);
        db.Exercise.create({
            exercise: req.body.exercise,
            located: req.body.located, 
            dayOf: req.body.dayOf,
        }).then((dbExercise) => res.json(dbExercise));
    })

//     // PUT route for updating gratitude entries 
    router.route("/gratitude")
    .put((req, res) => {
        db.Gratitude.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbGratitude) => res.json(dbGratitude));
    });

    //     // PUT route for updating gratitude entries 
    router.route("/reading")
    .put((req, res) => {
        db.Reading.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbReading) => res.json(dbReading));
    });

    //     // PUT route for updating gratitude entries 
    router.route("/exercise")
    .put((req, res) => {
        db.Exercise.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbExercise) => res.json(dbExercise));
    });


module.exports = router;


 