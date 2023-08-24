const Bag = require("../models/bagModel");
const Product = require("../models/ProductModel");
const user = require("../models/userModels");
const Order = require('../models/orderModel');
const sendEmail = require("../utils/mail");



// place order
exports.newOrder = async (req, res, next) => {

  const {
    items,
    totalPrice,
    shipping,
    payment,
    phone_number,
    razorpayPaymentId

  } = req.body;

  const userEmail = req.user.email

  const order = await Order.create({
    items,
    totalPrice,
    shipping,
    payment,
    phone_number,
    razorpayPaymentId,
    user: req.user._id,
  });



  sendEmail({
    email: userEmail,
    subject: `StyleME Order id${order._id}`,
    message: `Your order has been successfully completed of amount ${totalPrice} \n Click below link to get more details \n\n http://localhost:3000/me/OrderList`,
  });


  res.status(201).json({
    success: true,
    order
  });
}

// get user order
exports.myOrder = async (req, res, next) => {
  const orderItems = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orderItems
  });
}


// single order
exports.getSingleOrder = async (req, res, next) => {
  const singleOrder = await Order.findById(req.params.id)
  if (!singleOrder) {
    return next("Order not found with this Id");
  }

  res.status(200).json({
    success: true,
    singleOrder,
  });
}

// get all orders
exports.allOrder = async (req, res, next) => {
  const orderItems = await Order.find();

  res.status(200).json({
    success: true,
    orderItems
  });
}


exports.updateOrder = async (req, res, next) => {

  const { newItems } = req.body

  // console.log(newItems);

  const orders = await Order.findByIdAndUpdate(req.params.id, { items: newItems }, {
    new: true

  });

  res.status(200).json({
    success: true,
    orders
  });
}










