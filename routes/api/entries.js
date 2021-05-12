const router = require("express").Router();
const db = require("../..//models");
// const isAuthenticated = require("../../config/middleware/isAuthenticated");



// Matches with "/api/entries"

    router.route("/")
    .get((req, res) => {
        db.HabitHelper.findAll({}).then((dbHabitHelper) => res.json(dbHabitHelper));
    })

    router.route("/gratitude")
    // CHECK GET route for getting the gratitude entries
    .get((req, res) => {
        db.Gratitude.findAll({}).then((dbGratitude) => res.json(dbGratitude));
    })
    .post((req, res) => {
        console.log(req.body);
        db.Gratitude.create({
            gratefulFor: req.body.gratefulFor,
            dayOf: req.body.dayOf,
        }).then((dbGratitude) => res.json(dbGratitude));
    })

    // CHECK GET route for getting the reading entries
    router.route("/reading")
    .get((req, res) => {
        db.Reading.findAll({}).then((dbReading) => res.json(dbReading));
    })

    // CHECK GET route for getting the exercise entries
    router.route("/exercise")
    .get((req, res) => {
        db.Exercise.findAll({}).then((dbExercise) => res.json(dbExercise));
    })



    //     // POST route for saving a new reading entry
    router.route("/reading")
    .post((req, res) => {
        console.log(req.body);
        db.Reading.create({
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


 