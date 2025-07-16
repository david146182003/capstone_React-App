import express from 'express'
import cors from 'cors'
import connectDb from './db.js';

const app = express();
const port = 8080;

app.use(cors())

app.get('/', (req, res)=>{
    res.json("Hello (from server)")
    
})

app.post('/', (req, res)=>{
    
})

app.listen(port, ()=>{
    console.log(`Server is running port: ${port}`)
    connectDb()
})