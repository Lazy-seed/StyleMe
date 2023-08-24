const Avatar = require("../models/AvatarFabric");
const Product = require("../models/ProductModel");
const { find } = require("../models/userModels");
const user = require("../models/userModels");


// Create new Avatar
exports.newFabric = async (req, res, next) => {
  const {
    fabric_name,
    fabric_Code,
    price,
    type,
    gender,
    img
  } = req.body;

  const avatartInfo = await Avatar.create({
    fabric_name,
    fabric_Code,
    price,
    type,
    gender,
    img
  });

  res.status(201).json({
    success: true,
    avatartInfo,
  });
}






// get Avatar detail
exports.allFabric = async (req, res, next) => {
  const fabrics = await Avatar.find();
  if (!fabrics) {
    res.status(200).json({
      success: false,
      msg:"cannot find fabrics",
    });
  }
  if (fabrics) {
    res.status(200).json({
      success: true,
      fabrics,
    });
  }
 
}


















































