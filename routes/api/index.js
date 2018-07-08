const router = require("express").Router();
const articleRoutes = require("./articles");
const nyRoutes = require("./nyt");

router.use("/articles", articleRoutes);
router.use("/nyt", nyRoutes);

module.exports = router;