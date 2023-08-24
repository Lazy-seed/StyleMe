const app= require("./app");
const dotenv=require("dotenv");
const connectDb=require("./config/db");



// config  
dotenv.config({path:"backend/config/config.env"});  

//database connection 
connectDb();

const server =app.listen(8000,()=>{
console.log(`server is working 8000`)

});





