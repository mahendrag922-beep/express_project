const express = require("express");
const app = express();
const port = 3000;
const addUserMiddleware = (req, res, next) => {
  req.user = "Guest";   // adding new property to req object
  next();               // move to next middleware / route
};
app.get("/welcome", addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});
app.listen(port, () => {
  console.log("Server running on http://localhost:3000");
});
