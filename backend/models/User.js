const mongoose=require('mongoose');const bcrypt=require('bcryptjs');
const s=new mongoose.Schema({name:String,email:{type:String,unique:true},password:String});
s.pre('save',async function(){if(!this.isModified('password'))return;this.password=await bcrypt.hash(this.password,10);});
s.methods.matchPassword=function(p){return bcrypt.compare(p,this.password)};
module.exports=mongoose.model('User',s);