mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    items: [{
        productID: {
            type: String
        },
        itemID: {
            type: String
        },
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        quantity: {
            type: Number,
        },
        size: {
            type: String,
        },
        img: {
            type: String,
        },
        deliveryStatus: {
            type: String,
            default: "processed"
        },
        OrderDate: {
            type: Date,
            default: Date.now,
        },
        deliveryDate: {
            type: Date
        },
        ifCancelMsg: {
            type: String,
            default: null
        }
    }],

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
        phone: {
            type: Number,
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
    }
},
    {
        versionKey: false // _v:flase
    });

module.exports = mongoose.model("Order", orderSchema);
