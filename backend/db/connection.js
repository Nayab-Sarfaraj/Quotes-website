const mongoose = require("mongoose");

(async () => {
  try {
    await connectToDataBase();
    console.log("Connected to database successfully");
    // Any other initialization logic can go here
  } catch (error) {
    console.error("Error connecting to database:", error);
    // Handle error if needed
  }
})();

async function connectToDataBase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
}
