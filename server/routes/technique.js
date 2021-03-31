const express = require("express");
const router = express.Router();

// middlewares 
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller 
const { create, read, update, remove, list } = require("../controllers/technique");

// routes

router.post("/technique", authCheck, adminCheck, create);
router.get("/techniques", list);
router.get("/technique/:slug", read);
router.put("/technique/:slug", authCheck, adminCheck, update);
router.delete("/technique/:slug", authCheck, adminCheck, remove);

module.exports = router;