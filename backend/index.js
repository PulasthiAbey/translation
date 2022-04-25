const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 9090;

app.use(
  cors({
    origin: "*",
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9090/"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const translateRoute = require("./routes/translate");

app.use("/api/translate", translateRoute);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
