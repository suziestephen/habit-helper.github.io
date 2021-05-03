const router = require("express").Router();
const historyRoutes = require("./entries");

// Habit routes
router.use("/entries", entriesRoutes);

module.exports = router;
