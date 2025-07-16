import mongoose from "mongoose";

async function connectDb(){
    try {
        await mongoose.connect("mongodb+srv://david146182003:1124@cluster0.qlizzkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('MongoDB connected')
    }catch(e){
        console.log(e)
    }
   
}

export default connectDb