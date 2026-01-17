const express = require("express");
const router = express.Router();

// when user visits /users
router.get("/", (req, res) => {
  res.send("All users");
});

// when user visits /users/profile
router.get("/profile", (req, res) => {
  res.send("User profile");
});

module.exports = router;
