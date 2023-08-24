mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
    productID: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    img: {
        type: String
    },
    size: {
        type: String
    },
    og_price:{
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

module.exports = mongoose.model("Bag", bagSchema);
