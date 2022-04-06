const express = require("express");
const app = express();
const port = 3000;

const friends = [
  { id: 0, name: "Taimoor" },
  { id: 1, name: "Talha" },
  { id: 2, name: "Junaid" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/user", (req, res) => {
  res.json(friends);
});
app.post("/user", (req, res) => {
  console.log("Posting");
});

app.get("/user/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = friends[userId];
  user
    ? res.status(200).json(user)
    : res.status(404).json({ error: "User not found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
