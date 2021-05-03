const router = require("express").Router();
const historyRoutes = require("./history");

// Book routes
router.use("/history", historyRoutes);

module.exports = router;
