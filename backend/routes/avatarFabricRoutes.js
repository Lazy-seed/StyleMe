const express = require("express");
const { newFabric,allFabric } = require("../controllers/avatarFabricController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();



router.route("/vr/new/fabric").post(isAuthenticatedUser,newFabric);
router.route("/vr/all/fabric").get(allFabric);



module.exports = router;