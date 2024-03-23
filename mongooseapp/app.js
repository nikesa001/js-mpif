import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.route.js";
import CategoryRouter from "./routes/category.route.js";
const app = express();
mongoose.connect("mongodb://localhost:27017/mongoapp")
.then(result=>{
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));

   app.use("/user",UserRouter);
   app.use("/category",CategoryRouter);
   
   app.listen(3000,()=>{
    console.log("Server started....");
   })
}).catch(err=>{
    console.log(err);
})