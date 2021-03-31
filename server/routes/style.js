const express = require("express");
const router = express.Router();

// middlewares 
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller 
const { create, read, update, remove, list } = require("../controllers/style");

// routes

router.post("/style", authCheck, adminCheck, create);
router.get("/styles", list);
router.get("/style/:slug", read);
router.put("/style/:slug", authCheck, adminCheck, update);
router.delete("/style/:slug", authCheck, adminCheck, remove);

module.exports = router;


