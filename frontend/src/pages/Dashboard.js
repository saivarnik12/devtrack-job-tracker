import React,{useEffect,useState} from 'react';import API from '../api/api';import Card from '../components/ApplicationCard';
export default ()=>{const[a,setA]=useState([]);const[f,setF]=useState({company:'',role:'',notes:''});
const load=async()=>setA((await API.get('/applications')).data);useEffect(()=>{load()},[]);
const add=async e=>{e.preventDefault();await API.post('/applications',f);load();};
const del=async id=>{await API.delete('/applications/'+id);load();};
return(<div><h2>Dashboard</h2><form onSubmit={add}><input placeholder='Company' onChange={e=>setF({...f,company:e.target.value})}/>
<input placeholder='Role' onChange={e=>setF({...f,role:e.target.value})}/><input placeholder='Notes' onChange={e=>setF({...f,notes:e.target.value})}/>
<button>Add</button></form>{a.map(x=><Card key={x._id} app={x} onDelete={del}/>)}</div>);}