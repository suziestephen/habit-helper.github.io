const router = require("express").Router();
const db = 



// Matches with "/api/entries"


router.route("/gratitude")
    // CHECK GET route for getting the gratitude entries
    .get((req, res) => {
        db.Gratitude.findAll({}).then((dbGratitude) => res.json(dbGratitude));
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


//     // POST route for saving a new gratitude entry
//     .post((req, res) => {
//         console.log(req.body);
//         db.Gratitude.create({
//             gratefulFul: req.body.gratefulFor,
//             date: req.body.date,
//         }).then((dbGratitude) => res.json(dbGratitude));
//     })

//     // PUT route for updating gratitude entries 
//     .put((req, res) => {
//         db.Gratitude.update(req.body, {
//             where: {
//                 id: req.body.id,
//             },
//         }).then((dbGratitude) => res.json(dbGratitude));
//     });

// // need for reading and exercise

module.exports = router;


 