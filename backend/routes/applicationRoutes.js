const r=require('express').Router();const App=require('../models/Application');const auth=require('../middleware/authMiddleware');
r.get('/',auth,async(req,res)=>res.json(await App.find({user:req.user})));
r.post('/',auth,async(req,res)=>res.json(await App.create({...req.body,user:req.user})));
r.delete('/:id',auth,async(req,res)=>{await App.findByIdAndDelete(req.params.id);res.json({msg:'Deleted'});});
module.exports=r;