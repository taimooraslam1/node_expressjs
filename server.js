const express = require("express");
const app = express();
const port = 3000;

const friends = [
  { id: 0, name: "Taimoor" },
  { id: 1, name: "Talha" },
  { id: 2, name: "Junaid" },
];

app.use((res, req, next) => {
  console.log(`${res.method} ${req.url}`);
  next();
});

app.use(express.json());

app.post("/user", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing user name" });
  }
  const addNewUser = { id: friends.length, name: req.body.name };
  friends.push(addNewUser);
  res.json(addNewUser);
});

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
