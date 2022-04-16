const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const translateRoute = require("./routes/translate");

app.use("/api/translate", translateRoute);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
