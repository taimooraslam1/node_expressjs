const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/user", (req, res) => {
  res.send("<ul><li>Hello Taimoor!</li></ul>");
});
app.post("/user", (req, res) => {
  console.log("Posting");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
