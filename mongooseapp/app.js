import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.route.js";
import CategoryRouter from "./routes/category.route.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from "./routes/cart.route.js";
const app = express();
mongoose.connect("mongodb://localhost:27017/mongoapp")
.then(result=>{
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));

   app.use("/user",UserRouter);
   app.use("/category",CategoryRouter);
   app.use("/product",ProductRouter);
   app.use("/cart",CartRouter);
   app.listen(3000,()=>{
    console.log("Server started....");
   })
}).catch(err=>{
    console.log(err);
})