const express = require("express");
const app = express();
require("dotenv").config();
require("./db/connection");
const errorHandlingMiddleware = require("./middleware/error");
const quotesRouter = require("./routes/quotesRoutes");
const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/api", quotesRouter);
app.use("/api/v1", userRouter);
app.use(errorHandlingMiddleware);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server runnig on the port ${PORT}`);
});
