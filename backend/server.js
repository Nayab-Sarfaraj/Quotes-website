const express = require("express");
const app = express();
require("dotenv").config();
require("./db/connection");
const errorHandlingMiddleware = require("./middleware/error");
const quotesRouter = require("./routes/quotesRoutes");
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", quotesRouter);

app.use(errorHandlingMiddleware);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server runnig on the port ${PORT}`);
});
