const Bag = require("../models/bagModel");
const Product = require("../models/ProductModel");
const user = require("../models/userModels");
const Order = require('../models/orderModel');
const OrderAvatar = require('../models/orderAvatarModel');
const { findById } = require("../models/userModels");


// place order
exports.newOrderAvatar = async (req, res, next) => {
  const {
    gender,
    shirt,
    shirt_size,
    pant,
    pant_size,
    collor,
    cuff,
    shipping,
    payment,
    deliveryStatus,
    phone_number,
    razorpayPaymentId,
    totalPrice


  } = req.body;

  const orderAvatar = await OrderAvatar.create({
    gender,
    shirt,
    shirt_size,
    pant,
    pant_size,
    collor,
    cuff,
    shipping,
    payment,
    phone_number,
    totalPrice,
    deliveryStatus,
    razorpayPaymentId,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    orderAvatar,
  });
}

// all order list
exports.showAvatarOrders = async (req, res, next) => {
  const OrderList = await OrderAvatar.find({ user: req.user._id })
  if (!OrderList) {
    res.status(404).json({
      success: false,
      msg: "order avatar list not found"
    })
  }
  if (OrderList) {
    res.status(200).json({
      success: true,
      OrderList
    })
  }
}


// order detail
exports.AvatarOrderDetail = async (req, res, next) => {

  const OrderList = await OrderAvatar.findById({ _id: req.params.id })
  console.log(OrderList);
  
  if (!OrderList) {
    res.status(404).json({
      success: false,
      msg: "order avatar list not found"
    })
  }
  if (OrderList) {
    res.status(200).json({
      success: true,
      OrderList
    })
  }
}

