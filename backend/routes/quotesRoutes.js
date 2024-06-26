const router = require("express").Router();
const quoteController = require("../controllers/quoteController");
const { isAuthenticated, authenticateRole } = require("../middleware/auth");
router
  .route("/admin/quotes")
  .get(isAuthenticated, authenticateRole, quoteController.getAllQuotes);
router.post(
  "/quotes",
  isAuthenticated,
  authenticateRole,
  quoteController.createQuote
);
router.get("/quotes", quoteController.getQuotes);
router.get("/quotes/:id", quoteController.getSingleQuote);
router.delete(
  "/quotes/:id",
  isAuthenticated,
  authenticateRole,
  quoteController.deleteQuote
);
router.patch(
  "/quotes/:id",
  isAuthenticated,
  authenticateRole,
  quoteController.updateQuote
);

module.exports = router;
