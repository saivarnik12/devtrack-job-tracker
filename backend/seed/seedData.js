require('dotenv').config();const mongoose=require('mongoose');const User=require('../models/User');const App=require('../models/Application');
mongoose.connect(process.env.MONGO_URI).then(async()=>{await User.deleteMany();await App.deleteMany();
const u=await User.create({name:'Demo User',email:'demo@test.com',password:'123456'});
await App.insertMany([{user:u._id,company:'Google',role:'Frontend',status:'Interview',notes:'Round soon'}]);
console.log('Seeded');process.exit();});