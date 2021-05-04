const router = require("express").Router();
const entriesRoutes = require("./entries");

// Habit routes
router.use("/entries", entriesRoutes);

module.exports = router;


