const router = require("express").Router();


// module.exports = (app) => { ???

// Matches with "/api/entries"
router.route("/api/entries")

    // GET habit 
    get((req, res) => {
        db.Gratitude.findOne({  // do I need to run a call for all of these for each table
            where: {
                habit: req.params.habit,
            },
        }).then((db) => res.json(dbHabits));
    })

    // CHECK GET route for getting the habit entries
    .get((req, res) => {
        db.History.findAll({}).then((dbHistory) => res.json(dbHistory));
    })


    // CHECK Get route for returning habit entries of a specific type
    .get((req, res) => {
        db.History.findAll({ 
            where: {
                habit: req.params.habit,
            },
        }).then((dbHistory) => {
            res.json(dbHistory);
        });
    })

// Matches with "/api/entries/:id"
router
  .route("/api/entires:id")
  .get(habitsController.findById)
  .put(habitsController.update)
  .delete(habitsController.remove);

module.exports = router;


 