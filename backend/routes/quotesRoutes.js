const router = require("express").Router();
const quoteController = require("../controllers/quoteController");
router.post("/quotes", quoteController.createQuote);
router.get("/quotes", quoteController.getQuotes);
router.delete("/quotes/:id", quoteController.deleteQuote);
router.patch("/quotes/:id", quoteController.updateQuote);

module.exports = router;
