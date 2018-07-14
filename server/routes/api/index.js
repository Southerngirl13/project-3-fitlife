const router = require("express").Router();
const signinRoutes = require("./signin");
const assessmentRoutes = require("./assessment");

// Book routes
router.use("/account", signinRoutes);
router.use("/assessment", assessmentRoutes);

module.exports = router;