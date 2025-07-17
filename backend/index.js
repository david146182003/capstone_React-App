import express from 'express'
import cors from 'cors'
import connectDb from './db.js';
import 'dotenv/config'
import Customer from './models/customers.js'

const app = express();
const port = process.env.PORT;

app.use(cors())

app.get('/customers', async(req, res)=>{
    try{
        const customers = await Customer.find({})
        res.status(200).json(customers)
    }catch(e){
        console.log(e)
    }
    
})

app.post('/', (req, res)=>{
    
})

app.listen(port, ()=>{
    console.log(`Server is running port: ${port}`)
    connectDb()
})