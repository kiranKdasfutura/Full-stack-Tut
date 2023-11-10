const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const authData=require('./Router/auth')
const crudData=require('./Router/CrudRouter')
const adminData=require('./Router/adminRouter')
dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGODB_URL).then((data)=>{
    console.log("database connected ");
}).catch((err)=>{
    console.log(err);
})


app.use(express.json());
app.use('/api/users',authData)
app.use('/api/crud',crudData)
app.use('/api/admin',adminData)


app.listen(7000,()=>{
    console.log('server  connected to 7000 port');
})

 
