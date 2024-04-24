import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext';
const LoginPage = () => {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[redirect,setRedirect]=useState(false)
const {setUser} =useContext(UserContext);

  async function handleLogin(ev){
    ev.preventDefault();
    try{
      const {data}=await axios.post('api/login',{email,password});
      setUser(data)
      alert('login successfully'); 
      setRedirect(true);
    }catch(err){
      alert('login failed');
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>  
  }
  return (
    <>
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-32'>
        <h1 className="text-4xl text-center mb-4">Login</h1>
    <form action="" className='max-w-md mx-auto ' onSubmit={handleLogin}>
        <input type="email"
         placeholder="your@email.com" 
         value={email}
         onChange={e=>setEmail(e.target.value)}

         />
        <input type="password" 
        placeholder='password' 
        value={password}
        onChange={e=>setPassword(e.target.value)}

        />
        <button className='primary'>Login</button>
        <div className='text-center py-2 text-gray-500'>
            Don't have an account yet? 
            <Link  className='underline text-black' to={'/register'}>
         Register Now
        </Link></div>

    </form>
        </div>
    </div>
    

    </>
  )
}

export default LoginPage