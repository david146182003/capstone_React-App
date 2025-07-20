import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    phone:{
        type: Number,
        required: false,
    },
    address:{
        type: String,
        required: true
    }
    
})

const Customer = mongoose.model('customers', customerSchema)

export default Customer