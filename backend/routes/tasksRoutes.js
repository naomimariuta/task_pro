const express = require("express");
const {
  createTask,
  moveTask,
  getTasks,
} = require("../controllers/tasksController");
const { authenticateToken } = require("../middleware/auth");

const router = express.Router();

router.post("/:columnId/tasks", authenticateToken, createTask);
router.get("/:columnId/tasks", authenticateToken, getTasks);
module.exports = router;
