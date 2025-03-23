import mongoose, { mongo } from "mongoose";

const orderItemsSchema =new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema= new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    address:{
        type:string,
        required:true
    },
    status:{
        type:String,
        enum:["pending","cancel","deliverd"],
        default:["pending"]
    }
},{timestamps:true})

export const order =mongoose.model("order",orderSchema)