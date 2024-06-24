const router = require("express").Router();
const quoteController = require("../controllers/quoteController");
const { isAuthenticated, authenticateRole } = require("../middleware/auth");
router.route("/admin/quotes").get(quoteController.getAllQuotes);
router.post(
  "/quotes",
  // isAuthenticated,
  // authenticateRole,
  quoteController.createQuote
);
router.get("/quotes", quoteController.getQuotes);
router.delete(
  "/quotes/:id",
  // isAuthenticated,
  // authenticateRole,
  quoteController.deleteQuote
);
router.patch(
  "/quotes/:id",
  isAuthenticated,
  authenticateRole,
  quoteController.updateQuote
);

module.exports = router;
