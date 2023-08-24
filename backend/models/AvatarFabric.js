mongoose = require("mongoose");

const fabricSchema = new mongoose.Schema({


    fabric_name: {
        type: String
    },
    fabric_Code: {
        type: String
    },
    price:{
        type: Number
    },
    type: {
        type: String
    },
    gender:{
        type:String
    },
    img: {
        type: String
    }

}, {
    versionKey: false // _v:flase
}
);

module.exports = mongoose.model("Avatar", fabricSchema);
