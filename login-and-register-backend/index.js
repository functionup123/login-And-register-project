const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const route = require('./route/route');

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

//Routes

app.use('/', route);



app.listen(3001,()=>{
    console.log("sever is started...")
})
