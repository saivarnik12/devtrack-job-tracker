import React,{useState} from 'react';import API from '../api/api';
export default ()=>{const[f,setF]=useState({email:'',password:''});
const s=async e=>{e.preventDefault();const r=await API.post('/auth/login',f);localStorage.setItem('token',r.data.token);window.location='/dashboard';};
return(<form onSubmit={s}><h2>Login</h2><input placeholder='Email' onChange={e=>setF({...f,email:e.target.value})}/>
<input type='password' placeholder='Password' onChange={e=>setF({...f,password:e.target.value})}/><button>Login</button></form>);}