const User = require('../models/user');
const Product = require("../models/product");
const Cart = require("../models/cart");
const Order = require('../models/order');


exports.userCart = async (req, res) => {
  // console.log(req.body); // {cart: []}
  const { cart } = req.body;

  let products = [];

  const user = await User.findOne({ email: req.user.email }).exec();

  // check if cart with logged in user id already exist
  let cartExistByThisUser = await Cart.findOne({ orderdBy: user._id }).exec();

  if (cartExistByThisUser) {
    cartExistByThisUser.remove();
    console.log("removed old cart");
  }

  for (let i = 0; i < cart.length; i++) {
    let object = {};

    object.product = cart[i]._id;
    object.count = cart[i].count;
    object.color = cart[i].color;
    // get price for creating total
    let productFromDb = await Product.findById(cart[i]._id).select("price").exec();
    object.price = productFromDb.price;

    products.push(object);
  }

  // console.log('products', products)

  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }

  // console.log("cartTotal", cartTotal);

  let newCart = await new Cart({
    products,
    cartTotal,
    orderdBy: user._id,
  }).save();

  console.log("new cart ----> ", newCart);
  res.json({ ok: true });
};


exports.getUserCart = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();

  let cart = await Cart.findOne({ orderdBy: user._id })
    .populate("products.product", "_id title price totalAfterDiscount")
    .exec();

  const { products, cartTotal, totalAfterDiscount } = cart;
  res.json({ products, cartTotal, totalAfterDiscount });
};

exports.addToWishlist = async (req, res) => {
    const { productId } = req.body;
  
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { $addToSet: { wishlist: productId } }
    ).exec();
  
    res.json({ ok: true });
  };
  
  exports.wishlist = async (req, res) => {
    const list = await User.findOne({ email: req.user.email })
      .select("wishlist")
      .populate("wishlist")
      .exec();
  
    res.json(list);
  };
  
  exports.removeFromWishlist = async (req, res) => {
    const { productId } = req.params;
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { $pull: { wishlist: productId } }
    ).exec();
  
    res.json({ ok: true });
  };

  exports.emptyCart = async (req, res) => {
    const user = await User.findOne({ email: req.user.email }).exec();

    const cart = await Cart.findOneAndRemove({ orderBy: user._id }).exec();
    res.json(cart);
  };


  exports.saveAddress = async (req, res) => {
    const userAddress = await User.findOneAndUpdate(
      { email: req.user.email },
      { address: req.body.address }
    ).exec();

    res.json({ ok: true });
  }


  exports.createOrder = async (req, res) => {
    const { paymentIntent } = req.body.stripeResponse;
    const user = await User.findOne({ email: req.user.email }).exec();

    let { products } = await Cart.findOne({ orderBy: user._id }).exec();

    let newOrder = await new Order({
      products,
      paymentIntent,
      orderBy: user._id,
    }).save();
    console.log("NEW ORDER SAVED", newOrder);
    res.json({ ok: true });
  };