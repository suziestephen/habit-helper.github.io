const db = require("../models");


// Routes
// =============================================================
module.exports = (app) => {

    // GET habit 
    app.get("/api/habits/:habit", (req, res) => {
        db.Habits.findOne({
            where: {
                habit: req.params.habit,
            },
        }).then((dbHabits) => res.json(dbHabits));
    });



    // CHECK GET route for getting the habit entries
    app.get('/api/history/', (req, res) => {
        db.History.findAll({}).then((dbHistory) => res.json(dbHistory));
    });

    // CHECK Get route for returning habit entries of a specific type
    app.get('/api/history/habit/:habit', (req, res) => {
        db.History.findAll({ 
            where: {
                habit: req.params.habit,
            },
        }).then((dbHistory) => {
            res.json(dbHistory);
        });
    });

        // CHECK Get route for returning habit entries on a specific date - need to check
        app.get('/api/history/date/:date', (req, res) => {
            db.History.findAll({ 
                where: {
                    date: req.params.date,
                },
            }).then((dbHistory) => {
                res.json(dbHistory);
            });
        });

    // Get route for retrieving a single habit entry
    app.get('/api/history/:id', (req, res) => {
        db.History.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbHistory) => res.json(dbHistory));
    });

    // POST route for saving a new habit entry
    app.post('/api/history', (req, res) => {
        console.log(req.body);
        db.History.create({
            habit: req.body.habit,
            book: req.body.book,
            pages: req.body.pages,
            exercise: req.body.exercise,
            gratefulFul: req.body.gratefulFor,
        }).then((dbHistory) => res.json(dbHistory));
    });

    // DELETE route for deleting habit entry -- do I want them to be able to do this?
    app.delete('/api/history/:id', (req, res) => {
        db.History.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbHistory) => res.json(dbHistory));
    });

    // PUT route for updating habit entries 
    app.put('/api/history', (req, res) => {
        db.History.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbHistory) => res.json(dbHistory));
    });
};