const mongoose = require("mongoose");

// Test connection to your MongoDB Atlas
console.log("Testing MongoDB Atlas connection...");

mongoose.connect("mongodb+srv://vidyadonthagani:Vidya2004@cluster0.xbz07xv.mongodb.net/ComplaintsData?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Successfully connected to MongoDB Atlas!");
  process.exit(0);
})
.catch((error) => {
  console.log("❌ Connection failed:", error.message);
  console.log("\n🔧 Troubleshooting Steps:");
  console.log("1. Check MongoDB Atlas Network Access - add your IP or 0.0.0.0/0");
  console.log("2. Verify Database Access - ensure user exists with correct password");
  console.log("3. Check user permissions - needs readWrite access to ComplaintsData database");
  process.exit(1);
});
