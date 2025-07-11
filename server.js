const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()
const cors = require("cors");


connectDb();
const app=express();

const port =process.env.PORT || 5000;
app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Welcome to the Contact Management System API 🚀");
});

app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
