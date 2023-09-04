const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/profile", (req, res, next) => {
  res.render("auth/user-profile");
});

module.exports = router;
