const Product = require("../models/product");
const User = require("../models/user");
const slugify = require("slugify");
const e = require("express");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title);
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.listAll = async (req, res) => {
  let products = await Product.find({})
    .limit(parseInt(req.params.count))
    .populate("category")
    .populate("subs")
    .sort([["createdAt", "desc"]])
    .exec();

    await new Promise(res => setTimeout(res, 500));

  res.json(products);
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Product.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("Product delete failed");
  }
};

exports.read = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
    .populate("category")
    .populate("subs")
    .exec();
  res.json(product);
};

exports.update = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("PRODUCT UPDATE ERROR ----> ", err);
    // return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

// WITHOUT PAGINATION
// exports.list = async (req, res) => {
//   try {
//     // createdAt/updatedAt, desc/asc, 3
//     const { sort, order, limit } = req.body;
//     const products = await Product.find({})
//       .populate("category")
//       .populate("subs")
//       .sort([[sort, order]])
//       .limit(limit)
//       .exec();

//     res.json(products);
//   } catch (err) {
//     console.log(err);
//   }
// };

// WITH PAGINATION
exports.list = async (req, res) => {
  // console.table(req.body);
  try {
    // createdAt/updatedAt, desc/asc, 3
    const { sort, order, page } = req.body;
    const currentPage = page || 1;
    const perPage = 3; // 3

    const products = await Product.find({})
      .skip((currentPage - 1) * perPage)
      .populate("category")
      .populate("subs")
      .sort([[sort, order]])
      .limit(perPage)
      .exec();
    
    await new Promise(res => setTimeout(res, 500));
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.productsCount = async (req, res) => {
  let total = await Product.find({}).estimatedDocumentCount().exec();
  res.json(total);
};

exports.productStar = async (req, res) => {
  const product = await Product.findById(req.params.productId).exec();
  const user = await User.findOne({ email: req.user.email }).exec();
  const { star } = req.body;

  // who is updating?
  // check if currently logged in user have already added rating to this product?
  let existingRatingObject = product.ratings.find(
    (ele) => ele.postedBy.toString() === user._id.toString()
  );

  // if user haven't left rating yet, push it
  if (existingRatingObject === undefined) {
    let ratingAdded = await Product.findByIdAndUpdate(
      product._id,
      {
        $push: { ratings: { star, postedBy: user._id } },
      },
      { new: true }
    ).exec();
    console.log("ratingAdded", ratingAdded);
    res.json(ratingAdded);
  } else {
    // if user have already left rating, update it
    const ratingUpdated = await Product.updateOne(
      {
        ratings: { $elemMatch: existingRatingObject },
      },
      { $set: { "ratings.$.star": star } },
      { new: true }
    ).exec();
    console.log("ratingUpdated", ratingUpdated);
    res.json(ratingUpdated);
  }
};


exports.listRelated = async (req, res) => {
  const product = await Product.findById(req.params.productId).exec();

  const related = await Product.find({
    _id: { $ne: product._id },
    category: product.category,
  })
    .limit(3)
    .populate('category')
    .populate('subs')
    .populate('postedBy')
    .exec();

    res.json(related);
};


// SEARCH / FILTER

const handleFilter = async (req, res, values) => {
  const products = await Product.find({ price: {
    $gte: price[0],
    $lte: price[1],
  }, category})
  .populate("category", "_id name")
  .populate("subs", "_id name")
  .populate("postedBy", "_id name")
  .exec();

  res.json(products);
};
////

const handleQuery = async (req, res, query) => {
  const products = await Product.find({ $text: { $search: query }})
    .populate("category", "_id name")
    .populate("subs", "_id name")
    .populate("postedBy", "_id name")
    .exec();

    res.json(products);
};

const handlePrice = async (req, res, price) => {
  try {
    let products = await Product.find({
      price: {
        $gte: price[0],
        $lte: price[1],
      },
    })
    .populate("category", "_id name")
    .populate("subs", "_id name")
    .populate("postedBy", "_id name")
    .exec();
  
  res.json(products);
  } catch (err) {
    console.log(err);
  }
};

const handleCategory = async (req, res, category) => {
  try {
    let products = await Product.find({category})
      .populate("category", "_id name")
      .populate("subs", "_id name")
      .populate("postedBy", "_id name")
      .exec();
    
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

const handleShipping = async (req, res, shipping) => {
  const products = await Product.find({ shipping })
    .populate("category", "_id name")
    .populate("subs", "_id name")
    .populate("postedBy", "_id name")
    .exec();

  res.json(products);
};

// exports.zoekFilters = async (req, res) => {
exports.searchFilters = async (req, res) => {

    try {
      // const { price, shipping, categories } = req.body;
      const zoekopdracht = req.body;

      const categories = req.body.categoryIds;

      const price = req.body.price;
      const shipping = req.body.shipping;

      console.log(price, "<<<------- prijs aangekomen in de bekend??? de filterdata");
      console.log(categories, "<<--- categoruies <<<_----- aangekomen in backend???");
      console.log(shipping, "<<---- shipping");

      // console.log(zoekopdracht, "<<---- query");
      // const products = await Product.find(price, shipping, categories);

      // const products = await Product.find({
      //   price: {
      //     $gte: price[0],
      //     $lte: price[1],
      //   },
      // })



      // category: categories

      // const products = await Product.find({
      //   shipping: shipping
      // })


      // , category: {categories}, shipping: shipping
      // const products = await Product.find({
      //   price: {
      //     $gte: price[0],
      //     $lte: price[1],
      //   }, category: categories, shipping: shipping})
      const products = await Product.find({
        price: {
          $gte: price[0],
          $lte: price[1],
        }, category: categories, shipping: shipping})
      .populate("category", "_id name")
      .populate("subs", "_id name")
      .populate("postedBy", "_id name")
      .exec();
      res.json(products);

      // console.log(products, "<<--producte?? ")
      console.log(products.length, "<<--- lengte")
      
  } catch(err) {
    console.log(err);
  }
}

// exports.searchFilters = async (req, res) => {


  // try {
  //     const zoekopdracht = req.body.zoekopdracht;
  //     console.log(zoekopdracht, "<<---- query");
  //     const products = await Product.find(zoekopdracht)
  //     .populate("category", "_id name")
  //     .populate("subs", "_id name")
  //     .populate("postedBy", "_id name")
  //     .exec();
  //     res.json(products);

  //     console.log(products, "<<--producte?? ")
  //     console.log(products.length, "<<--- lengte")
      
  // } catch(err) {
  //   console.log(err);
  // }



  // try {
  //     const { price, category, shipping } = req.body;
  //     if (price !== undefined, category, shipping ) {
  //       console.log(price, shipping, category);
  //     const products = await Product.find({ price: {
  //       $gte: price[0],
  //       $lte: price[1],
  //     }, category, shipping})
  //     .populate("category", "_id name")
  //     .populate("subs", "_id name")
  //     .populate("postedBy", "_id name")
  //     .exec();
  //     res.json(products);

  //     console.log(products, "<<--producte?? ")
  //     console.log(products.length, "<<--- lengte")
  //     } 
  //     // console.log(products.length, "<<<-__ lengte")


  // } catch(err) {
  //   console.log(err);
  // }




  // ---------------------------------------
  // const { query, price, category, shipping } = req.body;
  
  //   const searchValues = [];
  //   searchValues.push(query, price, category, shipping);
  //   const values = Object.assign(searchValues);

  // const searchValueQuery = query;
  // const searchValueShipping = shipping;

  //   if (price !== undefined) {
  //     // let searchValuePrice = price;
  //     // console.log(searchValuePrice);
  //     console.log(price, "<<+++ de riosho f");
  //   } 
  //     searchValues.push(price);

  //   if (category) {
  //     let searchValueCategory = category; 
  //     console.log(searchValueCategory);
  //   }
  //   searchValues.push(category);

  //   console.log(searchValues, "<<-- staat er iets????");

  // const { query, price, category, shipping } = req.body;

  // if (query || price !== undefined || category || shipping ) {
  //   searchValues.push(query || price || category || shipping);
  //   console.log(searchValues, "<<------ searchvalues");
  // }

  // if (query) {
  //   searchValues.push(query);
  //   console.log(searchValues, "<<------ searchvalues");
  // } else if (price !=== ) {

  // }













//   const { query, price, category, shipping } = req.body;

//   if (query) {

//     console.log(searchValues, "<<------ searchvalues");
//     await handleQuery(req, res, query);
//   }

//   // // price [20, 200]
//   if (price !== undefined) {

//     console.log("price ---> ", price);



//     await handlePrice(req, res, price);
//   }

//   if (category) {
//     console.log("category ---> ", category);

//     await handleCategory(req, res, category);
//   }

//   if (shipping) {
//     console.log("shipping ---> ", shipping);
//     await handleShipping(req, res, shipping);
//   }
// };

