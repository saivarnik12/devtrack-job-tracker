const r=require('express').Router();const jwt=require('jsonwebtoken');const User=require('../models/User');
r.post('/register',async(req,res)=>res.json(await User.create(req.body)));
r.post('/login',async(req,res)=>{const{email,password}=req.body;const u=await User.findOne({email});
if(!u||!(await u.matchPassword(password)))return res.status(400).json({msg:'Invalid'});
res.json({token:jwt.sign({id:u._id},process.env.JWT_SECRET)});});
module.exports=r;