const { Router } = require("express");
const middleware1 = require("../middleware/middleware1");

const router = Router();

router.use(middleware1);

router.get("/", (req, res) => res.send("Get users"));

router.post("/", (req, res) => res.send("Create user"));

router.put("/:id", (req, res) => res.send("Edit user"));

router.delete("/:id", (req, res) => res.send("Delete user"));

module.exports = router;
