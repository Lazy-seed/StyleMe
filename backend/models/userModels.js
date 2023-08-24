const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    role: {
        type: String,
       default:'user'
    },
    name: {
        type: String,
        required: [true, "enter name"],
        maxLength: [18, "cannot eceed 18 char"],
        minLength: [2, "grater than 2"],
    },
    email: {
        type: String,
        required: [true, "enter email"],
        unique: [true, "email exist"],
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
    },
    phone: {
        type: Number,
    },
    BOD: {
        type: Date,
    },
    gender: {
        type: String,
    },

    // address 1
    Address1_name: {
        type: String
    },
    Address1_phone: {
        type: Number
    },
    Address1_add: {
        type: String
    },
    Address1_pincode: {
        type: Number
    },
    Address1_city: {
        type: String
    },
    Address1_state: {
        type: String
    },

    // address 2
    Address2_name: {
        type: String
    },
    Address2_phone: {
        type: Number
    },
    Address2_add: {
        type: String
    },
    Address2_pincode: {
        type: Number
    },
    Address2_city: {
        type: String
    },
    Address2_state: {
        type: String
    },

    // address 3
    Address3_name: {
        type: String
    },
    Address3_phone: {
        type: Number
    },
    Address3_add: {
        type: String
    },
    Address3_pincode: {
        type: Number
    },
    Address3_city: {
        type: String
    },
    Address3_state: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

},
    {
        versionKey: false // _v:flase
    });


// encrypte password
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }

//     this.password = await bcrypt.hash(this.password, 10);
// });


// jwt token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};








//   compare password

userSchema.methods.comparePassword = async function (enteredPassword) {
    // return await bcrypt.compare(enteredPassword,this.password);

    if (this.password === enteredPassword) {
        return await enteredPassword;
    }
    return false
}



module.exports = mongoose.model("user", userSchema);
