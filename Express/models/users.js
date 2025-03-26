const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    _id:Number,
    name:String,
    age:Number,
    department:String
})

module.exports=mongoose.model('users',UserSchema,'MernProj')
