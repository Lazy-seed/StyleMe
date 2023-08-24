const express = require("express");
const { newOrderAvatar, showAvatarOrders, AvatarOrderDetail} = require("../controllers/orderAvatarController");
const router = express.Router();

const { isAuthenticatedUser} = require("../middleware/auth");


router.route("/vr/order").post(isAuthenticatedUser ,newOrderAvatar);
router.route("/vr/orderList").get(isAuthenticatedUser ,showAvatarOrders);
router.route("/vr/order/detail/:id").get(isAuthenticatedUser ,AvatarOrderDetail);



module.exports = router;
