const Product = require("../models/ProductModel");

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
}





// display products
exports.DisplayProducts = async (req, res, next) => {
  const product = await Product.find();
  const date = new Date()
  const add1 = new Date(Date.now() + (3600 * 1000 * 24));

  res.status(201).json({
    success: true,
    product
  });
}



// get single product
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return console.log("product not found", 404);
  }
  res.status(200).json({
    success: true,
    product,
  });
};


// update product --> ADMIN
exports.updateProduct = async (req, res, next) => {


  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true

  });

  res.status(200).json({
    success: true,
    product,
  });
};


// Create New Review or Update the review
exports.createProductReview = async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment: comment,
  };
  const product = await Product.findById(productId);
  const isReviewed = product.Reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );
  console.log(isReviewed, "   94");

  if (isReviewed) {
    product.Reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.Reviews.push(review);

    product.numOfReviews = product.Reviews.length;
  }

  let avg = 0;

  product.Reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.Reviews.length;
  await product.save({ validateBeforeSave: true });

  res.status(200).json({
    success: true,
  });
}

// Get All Reviews of a product
exports.getProductReviews = async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    Reviews: product.Reviews,
  });
}

// delete
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  await product.remove();
  res.status(200).json({
    success: true,
    message: "product deleted"
  });


}