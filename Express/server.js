const express=require('express')
const app=express()
// app.get('/',(req,res)=>{
//     res.send("Hello from Express");
// })
// app.use(express.static('Public'))

const mongoose=require('mongoose')
const MONGO_URL='mongodb://127.0.0.1:27017/MernProj'

const Users=require('./models/users')

mongoose.connect(MONGO_URL)
    .then(()=>console.log('DB connected successfully'))
    .catch((Error)=>console.log('ERROR:',Error))

app.use(express.json())
// app.get('/api/users',async(req,res)=>{
//     try{
//         const users=await Users.find()
//         res.json(users)
//     }
//     catch(error){
//         res.status(500).json({msg:'Internal server error'})
//     }
// })

// app.get('/api/users/:id',async(req,res)=>{
//     try{
//         const id=parseInt(req.params.id)
//         const user=await Users.findOne({_id:id})
//         if(!user){
//             return res.json({msg:`User with id ${id} not found`})
//         }
//         res.json(user)
//     }
//     catch(error){
//         res.status(500).json({msg:'Internal server error'})
//     }
// })

app.use(express.urlencoded({extended:true}))
app.post('/api/users',async(req,res)=>{
    try{
        const {_id,name,age,department}=req.body
        const existingUser=await Users.findOne({_id})
        if(existingUser){
            return res.status(400).json({msg:`User already existed`})
        }
        const newUser=new Users({_id,name,age,department})
        newUser.save()
        res.status(201).json({msg:'new user created'})
    }
    catch(error){
        res.status(500).json({msg:'Internal server error'})
    }
})

app.listen(8000,()=>{
    console.log(`Server running on 8000`);
})