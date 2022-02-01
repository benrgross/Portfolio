const router = require("express").Router();
const { route } = require(".");
const projectController = require("../../controllers/projectController");

router.route("/").get(projectController.findAll);

module.exports = router;
