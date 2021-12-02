const express = require("express");
const router = express.Router();
const needle = require("needle");
const url = require("url");

router.get("/", async (req, res, next) => {
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const gitRes = await needle(
      "get",
      "https://api.github.com/repos/ErezStu/AudiTech/pulls/" + params
    );
    const data = gitRes.body;
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
