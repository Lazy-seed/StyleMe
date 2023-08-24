
mongoose =require("mongoose");
const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required:[true, "enter name"]
    },
    desc: {
        type: String,
        required: [true, "enter desc"]
    },
    type: {
        type: String,
        required: [true, "enter type"]
    },
    price: {
        type: Number,
        required: [true, "enter price"],
        maxLength: [8]
    },
    og_price: {
        type: Number,
        required: [true, "enter orignal price"],
        maxLength: [8]
    },
    ratings: {
        type: Number,
        default: 0
    },
    // img: [
    //     {
    //       url: {
    //         type: String,
    //         required: true,
    //       },
    //     },
    //   ],

    img1:{
        type:String,
    },
    img2:{
        type:String,
    },
    img3:{
        type:String,
    },
    img4:{
        type:String,
    },

    homeFeatured:{
        type:Number,
        default:0
    },

    category: {
        type: String,
        required: [true, "enter category"]
    },
    stock: {
        type: Number,
        required: [true, "enter stock"],
        maxLength: [4, "count cannot be more than 4 length"],
        default: 0

    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    
    Reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        reviewAt:{
            type:Date,
            default:Date.now
        }
    }],
    
    createdAt:{
        type:Date,
        default:Date.now
    }
},
{
    versionKey: false // _v:flase
});

module.exports=mongoose.model("Products",productSchema);

