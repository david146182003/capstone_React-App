import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
    lastname:{
        type: String,
        required: true
    },
    firstname:{
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
    },
    city:{
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    }

    
})

const Shipping = mongoose.model('shipping', shippingSchema)

export default Shipping