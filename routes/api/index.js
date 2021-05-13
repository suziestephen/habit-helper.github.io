const router = require("express").Router();
const entriesRoutes = require("./entries");
const userRoutes = require("./user");


// Habit routes
router.use("/entries", entriesRoutes);
router.use("/user", userRoutes);

module.exports = router;


