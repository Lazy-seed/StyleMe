const express =require("express");

const {createProduct, DisplayProducts,getSingleProduct, createProductReview, getProductReviews, updateProduct, deleteProduct}=require("../controllers/ProductController")
const {isAuthenticatedUser,authorizeRole} =require("../middleware/auth");

const router=express.Router();

router.route("/product/new").post(createProduct);
router.route("/product/:id").get(getSingleProduct);
router.route("/products").get(DisplayProducts);

router.route("/admin/product/update/:id").put(updateProduct)

router.route("/admin/product/delete/:id").delete(deleteProduct)




// review update
router.route("/product/review").put(isAuthenticatedUser,createProductReview);

router.route("/reviews").get(getProductReviews);



// import to export router
module.exports = router;
