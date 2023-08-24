const User = require("../models/userModels");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/mail");

// add a user
exports.registerUser = async (req, res, next) => {
  const { role, name, email, password, phone, Address1_name, Address1_phone, Address1_add, Address1_city, Address1_state, Address1_pincode,
    Address2_name, Address2_phone, Address2_add, Address2_city, Address2_state, Address2_pincode,
    Address3_name, Address3_phone, Address3_add, Address3_city, Address3_state, Address3_pincode } = req.body;
  const user = await User.create({
    role, name,
    email,
    password,
    phone,
    Address1_name, Address1_phone, Address1_add, Address1_city, Address1_state, Address1_pincode,
    Address2_name, Address2_phone, Address2_add, Address2_city, Address2_state, Address2_pincode,
    Address3_name, Address3_phone, Address3_add, Address3_city, Address3_state, Address3_pincode
  });

  res.status(200).json({
    success: true,
    user,
    message: "account is created",
  });
}

exports.generateOTP = async (req, res) => {

  const { email, otp } = req.body;
  sendEmail({
    email: email,
    subject: `StyleMe`,
    message: `Your otp is ${otp}`,
  });


  res.status(200).json({
    success: true,
    message: "otp send",
  });
}


// user login
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(200).json({
      success: false,
      message: "enter login details",
    });
  }

  const user = await User.findOne({ email: email, password: password });

  if (!user) {
    return res.status(200).json({
      success: false,
      message: "invalid email or password",
    });
  }

  if (!(user.password === password)) {
    return res.status(200).json({
      success: false,
      message: "invalid email or password",
    });
  }

  sendToken(user, 201, res);
}



/// user logout
exports.logout = async (req, res, next) => {

  res.status(200).clearCookie("token").json({
    success: true,
    message: "Logged Out",
  });
}





// get user deatils
exports.getUserInfo = async (req, res, next) => {
  console.log(req.user.id);
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
}

// update user
exports.updateUser = async (req, res, next) => {
  const { role, name, email, password, phone, BOD, gender, Address1_name, Address1_phone, Address1_add, Address1_pincode, Address1_city, Address1_state,
    Address2_name, Address2_phone, Address2_add, Address2_pincode, Address2_city, Address2_state,
    Address3_name, Address3_phone, Address3_add, Address3_pincode, Address3_city, Address3_state } = req.body;


  const user = await User.findByIdAndUpdate(req.user.id, {
    role, name, email, password, phone, BOD, gender, Address1_name, Address1_phone, Address1_add, Address1_pincode, Address1_city, Address1_state,
    Address2_name, Address2_phone, Address2_add, Address2_pincode, Address2_city, Address2_state,
    Address3_name, Address3_phone, Address3_add, Address3_pincode, Address3_city, Address3_state
  }, {
    new: true
  });

  res.status(200).json({
    success: true,
    user
  });
}


// update Address1_name
exports.updateAddress1 = async (req, res, next) => {
  const { name, phone, add, city, state, pincode } = req.body;


  const user = await User.findByIdAndUpdate(req.user.id, { Address1: { name, phone, add, city, state, pincode } }, {
    new: false
  });


  res.status(200).json({
    success: true,
    user
  });
}





// get all users
exports.allUsers = async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({
    success: true,
    user,
  });
}


// get single users
exports.singleUser = async (req, res, next) => {
  const  {email}  = req.body;
console.log(email);
  const user = await User.findOne({ email: email });


  if (!user) {
    return res.status(200).json({
      success: false,
      message: "user not found",
    });
  }
  if (user) {
    return res.status(200).json({
      success: true,
      message: "user found",
    });
  }

}



//  user password
exports.updateUserPass = async (req, res, next) => {

  const { role, name, email, password, phone, BOD, gender, Address1_name, Address1_phone, Address1_add, Address1_pincode, Address1_city, Address1_state,
    Address2_name, Address2_phone, Address2_add, Address2_pincode, Address2_city, Address2_state,
    Address3_name, Address3_phone, Address3_add, Address3_pincode, Address3_city, Address3_state } = req.body;

  const user_id = await User.findOne({ email: email });
  const user = await User.findByIdAndUpdate(user_id, {
    role, name, email, password, phone, BOD, gender, Address1_name, Address1_phone, Address1_add, Address1_pincode, Address1_city, Address1_state,
    Address2_name, Address2_phone, Address2_add, Address2_pincode, Address2_city, Address2_state,
    Address3_name, Address3_phone, Address3_add, Address3_pincode, Address3_city, Address3_state
  }, {
    new: true
  });



  console.log("password forget change");

  res.status(200).json({
    success: true,
    user
  });
}


/// delete single user
exports.deleteUser = async (req,res,next)=>{
  const  {id}  = req.body;
  const user = await User.findById(req.params.id);
  await user.remove();
  res.status(200).json({
    success: true,
    message: "user deleted"
  });
}
