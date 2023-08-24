const express = require("express");
const { newOrder, myOrder ,getSingleOrder, allOrder,updateOrder} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser} = require("../middleware/auth");


router.route("/me/bag/order").post(isAuthenticatedUser, newOrder);

router.route("/me/bag/orders").get(isAuthenticatedUser, myOrder);

router.route("/me/order/details/:id").get(getSingleOrder);

router.route("/me/order/update/:id").put(updateOrder);

router.route("/admin/orders").get(allOrder);

// router
//   .route("/bagItem/:id")
//   .delete(isAuthenticatedUser, deleteBagItem);

module.exports = router;
