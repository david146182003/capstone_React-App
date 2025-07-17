import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true
    }
    
})

const Customer = mongoose.model('customers', customerSchema)

export default Customer