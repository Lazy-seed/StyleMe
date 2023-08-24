mongoose = require("mongoose");

const orderAvatarSchema = new mongoose.Schema({

    gender: {
        type: String,
    },

    shirt: {
        type: String,
    },
    shirt_size: {
        type: String,
    },
    pant: {
        type: String,
    },
    pant_size: {
        type: String,
    },

    collor: {
        type: String,
    },

    cuff: {
        type: String,
    },
    totalPrice: {
        type: Number,
    },
    shipping: {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        address: {
            type: String,
        },
        state: {
            type: String,
        },
        city: {
            type: String,
        },
        zipcode: {
            type: String,
        }

    },
    payment: {
        type: String,
        default: 'pending'
    },
    deliveryStatus: {
        type: String,
        default: "processed"
    },
    razorpayPaymentId: {
        type: String
    },
    phone_number: {
        type: Number
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    OrderDate: {
        type: Date,
        default: Date.now,
    }

},
    {
        versionKey: false // _v:flase
    });

module.exports = mongoose.model("orderAvatar", orderAvatarSchema);
