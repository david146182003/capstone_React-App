import express from 'express'
import cors from 'cors'
import connectDb from './db.js';
import 'dotenv/config'
import Customer from './models/customers.js'

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use(cors())


app.get('/customers', async(req, res)=>{
    try{
        const customers = await Customer.find({})
        res.status(200).json(customers)
    }catch(e){
        console.log(e)
    }
    
})

app.post('/customers', async (req, res)=>{
    try{
        const customer = await Customer.create(req.body)
        res.status(200).json(customer)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
})
app.patch('/customers/:id', async (req, res)=>{
    try{
        const updates = req.body;
        const updatedCustomer = await Customer.updateOne({_id: req.params.id}, {$set: updates});
        res.json(updatedCustomer)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
})

app.delete('/customers/:id', async (req, res)=>{
    try{
        const result = await Customer.deleteOne({_id: req.params.id});
        if(result.deletedCount ==0){
            res.status(404).json({error: 'No customer found'})
        }
        res.json(result)
    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
})

app.get('/customers/:id', async(req, res)=>{
    try{
        const customer = Customer.findOne()
    }catch(e){
        console.log(e)
    }
})

app.listen(port, ()=>{
    console.log(`Server is running port: ${port}`)
    connectDb()
})