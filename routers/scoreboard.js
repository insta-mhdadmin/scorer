const $ = require("express").Router();

$.get("/", function (req, res) {
  res.render("scoreboard");
});
module.exports = $;
