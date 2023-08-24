const Bag = require("../models/bagModel");
const Product = require("../models/ProductModel");
const user = require("../models/userModels");
const sendEmail = require("../utils/mail");






exports.newBag = async (req, res, next) => {
  const {
    name,
    price,
    img,
    quantity,
    productID,
    size,
    og_price
  } = req.body;



  // find product
  const scanProduct = await Bag.find({ productID: productID, size: size });
  if (scanProduct[0]) {
    const qt = scanProduct[0].quantity + 1
    // const pr = price * qt
    const pr = price
    const QtyUpdate = await Bag.findOneAndUpdate({ productID: productID, size: size }, { quantity: qt, price: pr }, { new: true });
    console.log("updated");
    res.status(201).json({
      success: true,
      msg: "product has updated"
    });
  }


  if (!(scanProduct[0])) {
    console.log("creted");
    const bagItems = await Bag.create({
      name,
      price,
      img,
      quantity,
      productID,
      user: req.user._id,
      size,
      og_price
    });
    res.status(201).json({
      success: true,
      msg: "product added to bag",
      bagItems

    });
  }
}



// get logged in user  bag items
exports.myBag = async (req, res, next) => {
  const bagItems = await Bag.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    bagItems,
  });
}


// delete bag items
exports.deleteBagItem = async (req, res, next) => {
  const bagItem = await Bag.findById(req.params.id);

  if (!bagItem) {
    return next("bag item not found not found with this Id", 404);
  }


 


  await bagItem.remove();
  res.status(200).json({
    success: true,
    message: "bag item deleted delete"
  });


  // del quantity
  // if (bagItem.quantity >= 2) {
  //   const old_pr = bagItem.price / (bagItem.quantity);
  //   const qt = (bagItem.quantity) - 1
  //   const pr = qt * old_pr
  //   const QtyUpdate = await Bag.findOneAndUpdate({ _id: req.params.id }, { quantity: qt, price: pr }, { new: true });

  //   res.status(200).json({
  //     success: true,
  //     message: "qty -- "
  //   });
  // }

  // del product

  // if (bagItem.quantity === 1) {
  //   await bagItem.remove();
  //   res.status(200).json({
  //     success: true,
  //     message: "bag item deleted delete"
  //   });
  // }
}


// 
exports.deleteAllBagItem = async (req, res, next) => {
  const bagItem = await Bag.findById(req.params.id);

  if (!bagItem) {
    return next("bag item not found not found with this Id", 404);
  }


  // del product


  await bagItem.remove();
  res.status(200).json({
    success: true,
    message: "bag item deleted delete"
  });

}




exports.bagQtyUpdate=async (req,res)=>{
  const bagItem = req.body

  // const w= await Bag.findById(req.params.id);
  // console.log(w);
  const updateItem = await Bag.findByIdAndUpdate(req.params.id, bagItem , {
    new: true

  })
  console.log(updateItem);

  res.status(200).json({
    success: true,
    updateItem
  });
}
