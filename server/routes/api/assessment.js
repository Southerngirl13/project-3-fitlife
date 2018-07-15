const router = require("express").Router();
const assessmentController = require("../../../controllers/assessmentController");

// Matches with "/api/assessment"
router.route("/")
  .get(assessmentController.findAll)
  .post(assessmentController.create);

// Matches with "/api/assessment/:id"
router
  .route("/:id")
  .get(assessmentController.findById)
  .put(assessmentController.update)
  .delete(assessmentController.remove);

module.exports = router;