const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
var cors = require('cors')
// const errorMiddlerware = require("./middleware/error");

app.use(cors({credentials: true, origin: 'http://localhost:3000' }) )
app.use(express.json());
app.use(cookieParser());

//routes imports product
const product = require("./routes/ProductRoutes")
const user = require("./routes/userRoute");
const bag = require("./routes/bagRoute");
const order = require("./routes/orderRoute");
const avatar=require("./routes/avatarFabricRoutes")
const orderAvatar=require("./routes/orderAvatarRoute")
// routes
app.use("/api/v1",product);
app.use("/api/v1", user)
app.use("/api/v1", bag);
app.use("/api/v1", order);
app.use("/api/v1", avatar);
app.use("/api/v1", orderAvatar);

// app.use(express.json({ extended: false }));
app.use('/payment', require('./routes/payment'));
// middleware for error
// app.use(errorMiddlerware);
// app.use('/snd', require('./utils/mail'))




module.exports = app




