const express = require("express");
const router = express.Router();


// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create, read, update, remove, list } = require("../controllers/subject");

// routes 
router.post("/subject", authCheck, adminCheck, create);
router.get("/subjects", list);
router.get("/subject/:slug", read);
router.put("/subject/:slug", authCheck, adminCheck, update);
router.delete("/subject/:slug", authCheck, adminCheck, remove);

module.exports = router;