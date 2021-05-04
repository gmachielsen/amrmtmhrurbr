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

// controllers
const { userCart, getUserCart, emptyCart, saveAddress, createOrder, orders, createCashOrder } = require("../controllers/user");
// router.get("/user", (req, res) => {
//     res.json({
//         data: "hey you hit user API endpoint",
//     });
// });

// wishlist 
router.post("/user/wishlist", authCheck, addToWishlist);
router.get("/user/wishlist", authCheck, wishlist);
router.put("/user/wishlist/:productId", authCheck, removeFromWishlist);


router.post("/user/cart", authCheck, userCart); // save cart
router.get("/user/cart", authCheck, getUserCart); // get cart
router.delete("/user/cart", authCheck, emptyCart); // empty cart
router.post("/user/address", authCheck, saveAddress);

router.post("/user/order", authCheck, createOrder); // stripe
router.post("/user/cash-order", authCheck, createCashOrder); // cod
router.get("/user/orders", authCheck, orders);

module.exports = router;