const express = require("express");
const cors = require("cors");

const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// test route (optional but good)
app.get("/", (req, res) => {
  res.send("API running ");
});

app.use("/", schoolRoutes);

module.exports = app;