import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    items:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    shipping:{
        type: String,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    order: {
        type:Array,
        required: true
    }
 
    
})

const Order = mongoose.model('order', orderSchema)

export default Order