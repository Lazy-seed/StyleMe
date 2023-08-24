const express = require("express");
const {
  newBag, myBag, deleteBagItem, deleteAllBagItem, bagQtyUpdate
} = require("../controllers/bagController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");


router.route("/bag/new").post(isAuthenticatedUser, newBag);

router.route("/bag/me").get(isAuthenticatedUser, myBag);

// router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/bag/update/:id").put(isAuthenticatedUser,bagQtyUpdate );

router.route("/bagItem/:id").delete(isAuthenticatedUser, deleteBagItem);
router.route("/AllbagItem/:id").delete(isAuthenticatedUser, deleteAllBagItem);

module.exports = router;
