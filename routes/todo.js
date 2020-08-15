const { Router } = require("express");
const router = Router();

// получение списка задач
router.get("/", (req, res) => {
  res.json({a: 1})
});

// создание новой задачи
router.post("/", (req, res) => {});

// изменение задачи
router.put("/:id", (req, res) => {});

// удаление задачи
router.delete("/:id", (req, res) => {});

module.exports = router;
