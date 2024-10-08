const express = require("express");
const app = express();
const port = 3000;

app.get("/status", (req, res) => {
  res.send("Works fine");
});

app.listen(port, () => {
  console.log(`Eventify listening on port ${port}`);
});
