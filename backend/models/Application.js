const mongoose=require('mongoose');
module.exports=mongoose.model('Application',new mongoose.Schema({
user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
company:String,role:String,status:{type:String,enum:['Applied','Interview','Offer','Rejected'],default:'Applied'},
notes:String,date:{type:Date,default:Date.now}
}));