const express = require('express');

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controllers
const {
    addToWishlist,
    wishlist,
    removeFromWishlist
} = require("../controllers/user");

// router.get("/user", (req, res) => {
//     res.json({
//         data: "hey you hit user API endpoint",
//     });
// });

// wishlist 
router.post("/user/wishlist", authCheck, addToWishlist);
router.get("/user/wishlist", authCheck, wishlist);
router.put("/user/wishlist/:productId", authCheck, removeFromWishlist);

module.exports = router;