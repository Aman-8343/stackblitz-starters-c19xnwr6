import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
   
},{timestamps:true})

export const category=mongoose.model("category",usercategorySchema)