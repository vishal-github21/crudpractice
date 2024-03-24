const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');


const app = express()
app.use(cors())
app.use(express.json())

const PORT=process.env.PORT || 8080

mongoose.connect('mongodb+srv://vishalkr2291981121:HSgLEpDuZck0DdYz@cluster0.szfobop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    dbName: 'crud'
})


    const UserSchema = new mongoose.Schema({
        Name: {
            type: String,
            
        },
        Email: {
            type: String,
            
            unique: true,
        },
        Age: {
            type: String,
            
        }
    });

const Usermodel=mongoose.model('users',UserSchema)

app.post('/create',(req,res)=>{
    Usermodel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    Usermodel.find({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.get('/',(req,res)=>{
    Usermodel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    Usermodel.findByIdAndUpdate({_id:id},{Name:req.body.Name,Email:req.body.Email,Age:req.body.Age})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    Usermodel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.listen(PORT,()=>console.log('server is running'))


